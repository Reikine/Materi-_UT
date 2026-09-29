### Tugas 1. Persiapan - Menyiapkan lingkungan, mengaktifkan API, dan membuat cluster
```sh
export PROJECT_ID=$(gcloud config get-value project)
export PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format='value(projectNumber)')
export REGION=
gcloud config set compute/region $REGION

gcloud services enable \
container.googleapis.com \
clouddeploy.googleapis.com \
artifactregistry.googleapis.com \
cloudbuild.googleapis.com

gcloud projects add--iam-policy-binding $PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe $PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/clouddeplot.jobRunner"

gcloud projects add--iam-policy-binding $PROJECT_ID \
--member=serviceAccount:$(gcloud projects describe $PROJECT_ID \
--format="value(projectNumber)")-compute@developer.gserviceaccount.com \
--role="roles/container.developer"

gcloud storage bucket create gs://${PROJECT_ID}_cloudbuild

gcloud artifacts repositories create cicd-challenge \
--description="Image registry for tutorial web app" \
--repository-format=docker \
--location=$REGION

gcloud container clusters create cd-staging --node-locations= --num-nodes=1 --async
gcloud container clusters create cd-production --node-locations= --num-nodes=1 --async
```
___

### Tugas 2. Membangun image dan menguploadnya ke repositori
```sh
cd ~/
git clone https://github.com/GoogleCloudPlatform/cloud-deploy-tutorials.git
cd cloud-deploy-tutorials
git checkout c3cae80 --quiet
cd tutorials/base

envsubst < clouddeploy-config/skaffold.yaml.template > web/skaffold.yaml
cat web/skaffold.yaml

cd web
skaffold build --interactive=false \
--default-repo $REGION-docker.pkg.dev/$PROJECT_ID/cicd-challenge \
--file-output artifacts.json
cd ..

cp clouddeploy-config/delivery-pipeline.yaml.template clouddeploy-config/delivery-pipeline.yaml
sed -i "s/targetId: staging/targetId: cd-staging/" clouddeploy-config/delivery-pipeline.yaml
sed -i "s/targetId: prod/targetId: cd-production/" clouddeploy-config/delivery-pipeline.yaml
sed -i "/targetId: test/d" clouddeploy-config/delivery-pipeline.yaml

gcloud config set deploy/region $REGION

gcloud beta deploy apply --file=clouddeploy-config/delivery-pipeline.yaml

gcloud beta deploy delivery-pipeline describe web-app

gcloud container clusters list --format="csv(name, status)"

CONTEXTS=("cd-staging" "cd-production")
for CONTEXT in ${CONTEXTS[@]}
do
    gcloud container clusters get-credentials ${CONTEXT} --region ${REGION}
    kubectl config rename-context gke_${PROJECT_ID}_${REGION}_${CONTEXT} ${CONTEXT}
done

for CONTEXT in ${CONTEXTS[@]}
do
    kubectl --context ${CONTEXT} apply -f kubernetes-config/web-app-namespace.yaml
done

envsubst < clouddeploy-config/target-staging.yaml.template > clouddeploy-config/target-cd-staging.yaml
envsubst < clouddeploy-config/target-prod.yaml.template > clouddeploy-config/target-cd-production.yaml
sed -i "s/staging/cd-staging" clouddeploy-config/target-cd-staging.yaml
sed -i "s/prod/cd-production" clouddeploy-config/target-cd-production.yaml

cat clouddeploy-config/target/cd-staging.yaml
cat clouddeploy-config/target/cd-production.yaml

gcloud beta deploy targets list
```
___

### Tugas 4. Membuat Rilis
```sh
gcloud beta deploy releases create web-app-001 \
--delivery-pipeline web-app \
--build-artifacts web/artifacts.json \
--skaffold-file web/skaffold.yaml \
--region $REGION

gcloud beta deploy rollouts list \
--delivery-pipeline web-app \
--release web-app-001 

kubectx cd-staging
kubectl get all -n web-app
```
___

### Tugas 5. Mempromosikan aplikasi Anda ke produksi
```sh
gcloud beta deploy releases promote \
--delivery-pipeline web-app \
--release web-app-001

gcloud beta deploy releases promote \
--delivery-pipeline web-app \
--release web-app-001

gcloud beta deploy rollouts list \
--delivery-pipeline web-app \
--release web-app-001

gcloud beta deploy rollouts approve web-app-001-to-prod-0001 \
--delivery-pipeline web-app \
--release web-app-001

gcloud beta deploy rollouts list \
--delivery-pipeline web-app \
--release web-app-001
```
___

### Tugas 6. Membuat perubahan pada aplikasi dan men-deploy ulang aplikasi tersebut
```sh
cd web
skaffold build --interactive=false \
--default-repo $REGION-docker.pkg.dev/$PROJECT_ID/cicd-challenge \
--file-output artifacts.json
cd ..

gcloud beta deploy releases create web-app-002 \
--delivery-pipeline web-app \
--build-artifacts web/artifacts.json \
--skaffold-file web/skaffold.yaml \
--region $REGION

gcloud beta deploy releases promote \
--delivery-pipeline web-app \
--release web-app-002

gcloud beta deploy rollouts list \
--delivery-pipeline web-app \
--release web-app-002
```
###
```sh
gcloud beta deploy rollouts rollback \
--delivery-pipeline web-app \
--target cd-staging \
--release web-app-001

kubectx cd-staging
kubectl get all -n web-app
```
```sh
gcloud dataplex zones create orders-curated-zone \
--location=$REGION \
--lake=ecommerce \
--display-name="Orders Curated Zone" \
--resource-location-type=SINGLE_REGION \
--type=CURATED \
--discovery-enabled \
--discovery-schedule="0 * * * *"

bq mk --location=$REGION --dataset orders

gcloud dataplex assets create orders-curated-dataset \
--location=$REGION \
--lake=ecommerce \
--zone=orders-curated-zone \
--display-name="Orders Curated Dataset" \
--resource-type=BIGQUERY_DATASET \
--resource-name=projects/$PROJECT_ID/datasets/orders \
--discovery-enabled

gcloud dataplex assets delete orders-curated-dataset \
--location=$REGION \
--zone=orders-curated-zone \
--lake=ecommerce

gcloud dataplex zones delete orders-curated-zone \
--location=$REGION \
--lake=ecommerce

gcloud dataplex lakes delete ecommerce \
--location=$REGION
```
___
```sql
CREATE TABLE Portfolio (
  PortfolioId INT64 NOT NULL,
  Name STRING(MAX),
  ShortName STRING(MAX),
  PortfolioInfo STRING(MAX)
) PRIMARY KEY (PortfolioId); 

CREATE TABLE Category (
  CategoryId INT64 NOT NULL,
  PortfolioId INT64 NOT NULL,
  CategoryName STRING(MAX),
  PortfolioInfo STRING(MAX)
) PRIMARY KEY (CategoryId);

CREATE TABLE Product (
  ProductId INT64 NOT NULL,
  CategoryId INT64 NOT NULL,
  PortfolioId INT64 NOT NULL,
  ProductName STRING(MAX),
  ProductAssetCode STRING(25),
  ProductClass STRING(25)
) PRIMARY KEY (ProductId);

CREATE TABLE Customer (
  CustomerId STRING(36) NOT NULL,
  Name STRING(MAX) NOT NULL,
  Location STRING(MAX) NOT NULL
) PRIMARY KEY (CustomerId);

INSERT INTO
  Portfolio (PortfolioId, Name, ShortName, PortfolioInfo)
VALUES 
  (1, "Banking", "Bnkg", "All Banking Business"),
  (2, "Asset Growth", "AsstGrwth", "All Asset Focused Products"),
  (3, "Insurance", "Insurance", "All Insurance Focused Products");

INSERT INTO
  Category (CategoryId, PortfolioId, CategoryName, PortfolioInfo)
VALUES 
  (1,1,"Cash",""),
  (2,2,"Investments - Short Return",""),
  (3,2,"Annuities",""),
  (4,3,"Life Insurance"."");

INSERT INTO
  Product (ProductId, CategoryId, PortfolioId, ProductName, ProductAssetCode, ProductClass)
VALUES 
  (1,1,1,"Checking Account","ChkAcct","Banking LOB"),
  (2,2,2,"Mutual Fund Consumer Goods","MFundCG","Investment LOB"),
  (3,3,2,"Annuity Early Retirement","AnnuFixed","Investment LOB"),
  (4,4,3,"Term Life Insurance","TermLife","Insurance LOB"),
  (5,1,1,"Savings Account","SavAcct","Banking LOB"),
  (6,1,1,"Personal Loan","PersLn","Banking LOB"),
  (7,1,1,"Auto Loan","AutLn","Banking LOB"),
  (8,4,3,"Permanent Life Insurance","PermLife","Insurance LOB"),
  (9,2,2,"US Savings Bonds","USSavBond","Investment LOB");
```

### Task 2. Analyze soccer data
```sql

SELECT 
  playerId, 
  (Players.firstName || ' ' || Players.lastName) AS playerName, 
  COUNT(id) AS numPKAtt, 
  SUM(IF(101 IN UNNEST(tags.id), 1, 0)) AS numPKGoals, 
  SAFE_DIVIDE(
    SUM(IF(101 IN UNNEST(tags.id), 1, 0)), 
    COUNT(id)
  ) AS PKSuccessRate
FROM 
  `soccer.events119` Events 
LEFT JOIN 
  `soccer.players` Players ON Events.playerId = Players.wyId 
WHERE 
  eventName = 'Free Kick' AND subEventName = 'Penalty' 
GROUP BY 
  playerId, 
  playerName 
HAVING 
  numPKAtt >= 5 
ORDER BY 
  PKSuccessRate DESC, 
  numPKAtt DESC;
```

### Task 3. Gain insight by analyzing soccer data
```sql
WITH Shots AS
(
  SELECT
    *,
    (101 IN UNNEST(tags.id)) AS isGoal,
    SQRT(
      POW(
        (90 - positions[ORDINAL(1)].x) * 95/100,
        2) +
      POW(
        (55 - positions[ORDINAL(1)].y) * 81/100,
        2)
    ) AS shotDistance
  FROM
    `soccer.events119`
  WHERE
    eventName = 'Shot' OR
    (eventName = 'Free Kick' AND subEventName IN ('Free kick shot', 'Penalty'))
)

SELECT
  ROUND(shotDistance, 0) AS ShotDistRound0,
  COUNT(*) AS numShots,
  SUM(IF(isGoal, 1, 0)) AS numGoals,
  AVG(IF(isGoal, 1, 0)) AS goalPct
FROM
  Shots
WHERE
  shotDistance <= 50
GROUP BY
  ShotDistRound0
ORDER BY
  ShotDistRound0
```
### Task 4. Create a regression model using soccer data
```sql
/* Calculate shot distance from (x,y) coordinates */
CREATE FUNCTION `soccer.GetShotDistanceToGoal119`(x INT64, y INT64)
RETURNS FLOAT64
AS (
 /* Translate 0-100 (x,y) coordinate-based distances to absolute positions
 using "average" field dimensions of 95x81 before combining in 2D dist calc */
 SQRT(
   POW((90 - x) * 95/100, 2) +
   POW((55 - y) * 81/100, 2)
   )
 );
/* Calculate shot angle from (x,y) coordinates */
CREATE FUNCTION `soccer.GetShotAngleToGoal119`(x INT64, y INT64)
RETURNS FLOAT64
AS (
 SAFE.ACOS(
   /* Have to translate 0-100 (x,y) coordinates to absolute positions using
   "average" field dimensions of 95x81 before using in various distance calcs */
   SAFE_DIVIDE(
     ( /* Squared distance between shot and 1 post, in meters */
       (POW(95 - (x * 95/100), 2) + POW(40.5 + (7.32/2) - (y * 81/100), 2)) +
       /* Squared distance between shot and other post, in meters */
       (POW(95 - (x * 95/100), 2) + POW(40.5 - (7.32/2) - (y * 81/100), 2)) -
       /* Squared length of goal opening, in meters */
       POW(7.32, 2)
     ),
     (2 *
       /* Distance between shot and 1 post, in meters */
       SQRT(POW(95 - (x * 95/100), 2) + POW(40.5 + 7.32/2 - (y * 81/100), 2)) *
       /* Distance between shot and other post, in meters */
       SQRT(POW(95 - (x * 95/100), 2) + POW(40.5 - 7.32/2 - (y * 81/100), 2))
     )
    )
  /* Translate radians to degrees */
  ) * 180 / ACOS(-1)
 )
;

/* Create an expected goals model using BigQuery ML */
CREATE OR REPLACE MODEL `soccer.xg_logistic_reg_model_119`
OPTIONS(
  model_type='logistic_reg',
  input_label_cols=['isGoal']
) AS

SELECT
  (101 IN UNNEST(e.tags.id)) AS isGoal,
  `soccer.GetShotDistanceToGoal119`(e.positions[ORDINAL(1)].x, e.positions[ORDINAL(1)].y) AS shotDistance,
  `soccer.GetShotAngleToGoal119`(e.positions[ORDINAL(1)].x, e.positions[ORDINAL(1)].y) AS shotAngle,
  e.subEventName AS shotType

FROM
  `soccer.events119` e
JOIN
  `soccer.matches` m ON e.matchId = m.wyId
JOIN
  `soccer.competitions` c ON m.competitionId = c.wyId

WHERE
  c.name != 'World Cup'
  AND (
    e.eventName = 'Shot' OR
    (e.eventName = 'Free Kick' AND e.subEventName IN ('Free kick shot', 'Penalty'))
  )


SELECT
  predicted_isGoal_probs[ORDINAL(1)].prob AS predictedGoalProb,
  * EXCEPT (predicted_isGoal, predicted_isGoal_probs)
FROM
  ML.PREDICT(
    MODEL `soccer.xg_logistic_reg_model_119`,
    (
      SELECT
        Events.playerId,
        (Players.firstName || ' ' || Players.lastName) AS playerName,
        Teams.name AS teamName,
        CAST(Matches.dateutc AS DATE) AS matchDate,
        Matches.label AS match,
        CAST((CASE
          WHEN Events.matchPeriod = '1H' THEN 0
          WHEN Events.matchPeriod = '2H' THEN 45
          WHEN Events.matchPeriod = 'E1' THEN 90
          WHEN Events.matchPeriod = 'E2' THEN 105
          ELSE 120
        END) + CEIL(Events.eventSec / 60) AS INT64) AS matchMinute,
        `soccer.GetShotDistanceToGoal119`(Events.positions[ORDINAL(1)].x, Events.positions[ORDINAL(1)].y) AS shotDistance,
        `soccer.GetShotAngleToGoal119`(Events.positions[ORDINAL(1)].x, Events.positions[ORDINAL(1)].y) AS shotAngle,
        Events.subEventName AS shotType,
        IF(101 IN UNNEST(Events.tags.id), 1, 0) AS isGoal
      FROM
        `soccer.events119` Events
      LEFT JOIN
        `soccer.matches` Matches ON Events.matchId = Matches.wyId
      LEFT JOIN
        `soccer.competitions` Competitions ON Matches.competitionId = Competitions.wyId
      LEFT JOIN
        `soccer.players` Players ON Events.playerId = Players.wyId
      LEFT JOIN
        `soccer.teams` Teams ON Events.teamId = Teams.wyId
      WHERE
        Competitions.name = 'World Cup' AND
        (Events.eventName = 'Shot' OR (Events.eventName = 'Free Kick' AND Events.subEventName IN ('Free kick shot', 'Penalty')))
    )
  )
ORDER BY
  predictedGoalProb DESC;
```