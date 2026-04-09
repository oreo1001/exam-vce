# Databricks 공인 데이터 엔지니어 어소시에이트 시험 - 답안 및 해설

**시험명:** Databricks-Certified-Data-Engineer-Associate  
**버전:** V15.65

---

| 번호 | 정답 | 해설 |
|------|------|------|
| 1 | **C** | Serverless Compute는 소규모, 빈번한 애드혹 Python 스크립트에 이상적입니다. 자동으로 프로비저닝되고 빠르게 확장되며 쿼리 완료 시 종료되어 운영 오버헤드와 비용을 최소화합니다. |
| 2 | **B** | Databricks의 Python 노트북 인터랙티브 디버거는 중단점을 설정하고 DataFrame을 포함한 변수 값을 실시간으로 검사할 수 있어 PySpark 노트북의 변환 오류를 디버깅하는 데 올바른 도구입니다. |
| 3 | **B** | 위치를 지정하지 않고 CREATE DATABASE를 실행하면 기본적으로 dbfs:/user/hive/warehouse에 저장됩니다. |
| 4 | **D** | `INSERT INTO my_table VALUES ('a1', 6, 9.4)`는 기존 Delta 테이블에 새 레코드를 추가하는 올바른 SQL 구문입니다. |
| 5 | **B** | Databricks Jobs는 의존성이 있는 여러 태스크를 예약하고, 재시도 및 모니터링을 지원합니다. |
| 6 | **C** | Schema Owner 역할은 Unity Catalog에서 스키마 내 데이터 객체에 대한 권한을 부여하고 취소할 수 있으면서도 스키마의 데이터 자체에 대한 읽기/쓰기 액세스가 필요 없습니다. |
| 7 | **D** | Python에서는 `def` 키워드로 함수를 정의하고 `return` 문으로 값을 반환합니다. `def add_integers(x, y): return x + y`가 올바른 구문입니다. |
| 8 | **A** | Structured Streaming Auto Loader는 클라우드 스토리지에 도착하는 새 파일을 자동으로 처리하도록 설계되었습니다. |
| 9 | **B** | PIVOT은 테이블을 긴 형식에서 넓은 형식으로 변환하는 SQL 키워드입니다. |
| 10 | **D** | Python 노트북의 셀에서 SQL을 사용하려면 셀의 첫 번째 줄에 `%sql`을 추가합니다. |
| 11 | **B** | Lakehouse Federation은 MySQL, Redshift, BigQuery와 같은 외부 데이터 소스를 데이터를 이동하거나 복제하지 않고 Unity Catalog를 통한 중앙 집중식 거버넌스를 유지하면서 쿼리할 수 있게 합니다. |
| 12 | **C** | CREATE TEMP VIEW는 동일한 Spark 세션 내에서만 사용 가능하고 세션 종료 후 유지되지 않는 임시 뷰를 생성합니다. |
| 13 | **C** | `count_if(member_id IS NULL)`은 member_id가 NULL인 행의 수를 반환합니다. |
| 14 | **B** | 기존 Job에 새 태스크를 생성하고 원래 태스크의 의존성으로 추가하면 새 태스크가 먼저 실행된 후 원래 태스크가 실행됩니다. |
| 15 | **B** | Unity Catalog는 여러 워크스페이스에 걸쳐 테이블, 스키마, 카탈로그에 대한 세분화된 액세스 제어를 제공합니다. |
| 16 | **B** | ACID 호환 트랜잭션 지원은 기존 데이터 레이크에 비해 데이터 품질을 향상시키는 핵심 기능입니다. |
| 17 | **C** | `@dlt.table` 데코레이터와 `spark.read.json("s3://...")`을 사용하여 JSON 소스 데이터를 올바르게 수집하고 DLT에서 관리되는 Delta 테이블로 구체화합니다. |
| 18 | **C** | Delta Sharing에서는 각 수신자에 대해 별도로 권한을 관리해야 합니다. 외부 파트너에게 READ, 내부 팀에게 READ/WRITE 권한을 할당하고 올바른 테이블과 뷰가 공유되었는지 확인합니다. |
| 19 | **E** | `GRANT USAGE ON DATABASE customers TO team;`은 팀이 데이터베이스에 존재하는 테이블을 볼 수 있도록 필요한 권한을 부여합니다. |
| 20 | **B** | Databricks Asset Bundles는 버전 제어와 함께 워크플로를 패키징하고, 통합 테스트 및 외부 작업 스케줄러에 의한 오케스트레이션을 지원하면서 프로덕션에 배포할 수 있게 합니다. |
| 21 | **A** | Delta Lake는 ACID 트랜잭션과 시간 여행을 제공하고, Unity Catalog는 리니지와 함께 거버넌스되고 감사 가능한 액세스를 보장합니다. |
| 22 | **A** | Z-Ordering은 자주 필터링되는 열을 기반으로 데이터를 물리적으로 구성하여 쿼리 실행 중 스캔되는 데이터 양을 줄입니다. |
| 23 | **C** | Unity Catalog에서 관리 테이블을 삭제하면 메타데이터와 기본 데이터 파일이 모두 삭제되고, 외부 테이블을 삭제하면 카탈로그 메타데이터만 제거되고 참조된 클라우드 스토리지 데이터는 그대로 유지됩니다. |
| 24 | **C** | Delta Lake 테이블의 데이터는 주로 Parquet 형식으로 저장됩니다. |
| 25 | **B** | autoCompact는 쓰기 중 자동으로 작은 파일을 압축하는 Delta Lake 기능입니다. |
| 26 | **AE** | A: 리전당 1개의 메타스토어만 허용. E: 메타스토어에 위치가 없으면 카탈로그에 관리 위치를 연결해야 합니다. |
| 27 | **D** | Auto Loader를 사용하여 `spark.readStream.format("cloudFiles").option("cloudFiles.format", "json").load("/input/path")`로 새 파일이 도착하면 자동으로 수집합니다. |
| 28 | **A** | Time Travel은 Delta Lake 테이블에 대한 모든 변경 사항을 추적하고 감사 목적으로 이전 버전을 검토할 수 있게 합니다. |
| 29 | **B** | 클라우드 간 및 다른 지리적 리전 간 데이터 전송은 클라우드 제공업체의 크로스 리전 및 이그레스 비용이 발생합니다. |
| 30 | **D** | Databricks Connect는 선호하는 로컬 IDE를 사용하면서 원격으로 Databricks 클러스터에 연결할 수 있게 하며, Databricks 런타임을 로컬에서 모방합니다. |
| 31 | **E** | Silver에서 Gold로의 hop은 집계를 수행합니다. groupBy("store").agg(sum("sales"))와 complete 출력 모드를 사용하는 옵션 E가 올바릅니다. |
| 32 | **E** | Auto Loader는 이전 실행 이후 새로운 파일을 자동으로 식별하고 해당 새 파일만 수집합니다. |
| 33 | **C** | Databricks 웹 애플리케이션은 클래식 Databricks 아키텍처의 컨트롤 플레인에 완전히 호스팅됩니다. |
| 34 | **C** | 예약된 워크플로는 파이프라인을 실행하는 데 충분한 시간만 클러스터가 실행되므로 리소스 소비 및 비용을 줄일 수 있습니다. |
| 35 | **C** | 태스크 워크플로 및 작업 예약으로 ETL 단계를 구조화하고, 순서대로 실행하고, 정기적으로 예약할 수 있습니다. |
| 36 | **D** | 데이터는 Databricks 고객의 클라우드 계정에 저장됩니다. |
| 37 | **B** | Schema evolution은 들어오는 JSON 파일의 스키마 변경을 자동으로 감지하고 대상 Delta 테이블을 진화시킵니다. |
| 38 | **B** | DELETE는 조건에 맞는 행만 제거하며 전체 데이터셋을 다시 작성하지 않습니다. |
| 39 | **D** | Serverless 기능을 켜면 SQL 엔드포인트가 빠르게 시작되어 비실행 엔드포인트에 대한 쿼리 지연 시간을 줄입니다. |
| 40 | **A** | 관리 테이블이기 때문에 DROP TABLE 시 데이터 파일과 메타데이터 파일이 모두 삭제됩니다. |
| 41 | **E** | `spark.sql(f"SELECT customer_id, spend FROM {table_name}")`로 Python 변수를 SQL 쿼리에 사용할 수 있습니다. |
| 42 | **AB** | A: 필터를 좁혀 입력 데이터를 줄여 메모리 압력 감소. B: 워커 노드를 업사이징하고 autoshuffle 파티션을 활성화하여 더 많은 메모리와 더 나은 파티셔닝을 제공합니다. |
| 43 | **E** | 새 DLT 파이프라인을 생성할 때 실행할 최소 하나의 노트북 라이브러리를 반드시 지정해야 합니다. |
| 44 | **C** | 메달리온 아키텍처는 모든 원시 소스 데이터를 Bronze 레이어에 추가 전용으로 최소한의 변환으로 랜딩하고, Silver/Gold에서 정리, 중복 제거, 비즈니스 모델링을 수행하도록 권장합니다. |
| 45 | **A** | Databricks SQL Warehouse는 서버리스 컴퓨팅 환경에서 Delta Lake 데이터에 대한 SQL 쿼리를 실행할 수 있게 합니다. |
| 46 | **B** | 노트북 수정 후 실패한 워크플로를 다시 실행하려면 실행을 복구(Repair the run)해야 합니다. |
| 47 | **E** | Development 모드 + Continuous Pipeline에서는 파이프라인이 종료될 때까지 정해진 간격으로 업데이트되며 추가 테스트를 위해 컴퓨팅 리소스가 유지됩니다. |
| 48 | **B** | Spot 인스턴스가 활성화된 Job cluster는 소규모 프로덕션 워크로드에 가장 저렴하면서도 효율적인 옵션입니다. |
| 49 | **D** | Gold 테이블을 소스로 사용하는 것은 대시보드에 공급하도록 설계된 집계 데이터를 쿼리하는 작업입니다. |
| 50 | **C** | Databricks에서 각 노트북 셀은 하나의 언어만 지원합니다. |
| 51 | **C** | SQL에서 `CREATE LIVE TABLE ... AS SELECT ... FROM STREAM kafka...`로 Kafka 데이터를 DLT 파이프라인에 수집합니다. |
| 52 | **D** | Delta Sharing은 Databricks 계정 없이도 보안되고 읽기 전용인 URL을 통해 파트너가 데이터에 액세스할 수 있게 합니다. |
| 53 | **A** | Spot 인스턴스가 활성화된 Job cluster는 가장 비용 효율적인 프로덕션 옵션입니다. |
| 54 | **B** | Serverless SQL Warehouse는 자동으로 확장되고 수동 구성 없이 성능을 최적화하며 실제 사용량에 대해서만 비용이 청구됩니다. |
| 55 | **A** | Watermark는 늦게 도착한 데이터를 처리할 수 있는 시간을 정의합니다. |
| 56 | **B** | Checkpointing은 정확히 한 번 처리 의미론을 보장하고 장애에서 복구합니다. |
| 57 | **A** | DataFrame은 자동 병렬 처리를 가능하게 하는 Spark 추상화입니다. |
| 58 | **A** | `printSchema()`는 스키마를 트리 형식으로 출력합니다. |
| 59 | **E** | Bronze 테이블은 스키마가 적용된 원시 데이터를 포함합니다. |
| 60 | **A** | Delta Lake는 ACID 트랜잭션, 스키마 적용, 신뢰성을 추가하는 최적화된 스토리지 레이어입니다. |
| 61 | **D** | Data lakehouse는 데이터 레이크와 데이터 웨어하우스의 장점을 결합하여 사일로화된 아키텍처를 통합합니다. |
| 62 | **D** | 클러스터 풀의 클러스터를 사용하면 미리 준비된 클러스터로 시작 시간을 개선할 수 있습니다. |
| 63 | **B** | VIEW에 대한 SELECT 권한만 필요합니다. |
| 64 | **A** | `select`로 열의 하위 집합만 읽을 수 있습니다. |
| 65 | **D** | Spark SQL의 배열 함수는 JSON 파일에서 수집된 복잡하고 중첩된 데이터를 작업할 수 있게 합니다. |
| 66 | **D** | `if day_of_week == 1 and review_period:`가 올바른 구문입니다. `==`은 비교 연산자이고, Boolean 변수는 직접 평가합니다. |
| 67 | **C** | 테스트가 완료되어 프로덕션에서 예약해야 하는 작업에는 Jobs Cluster가 가장 적합합니다. |
| 68 | **A** | Structured Streaming은 Checkpointing과 Write-ahead Logs를 사용하여 오프셋 범위를 기록합니다. |
| 69 | **B** | CACHE TABLE은 데이터셋을 메모리에 저장하여 반복 쿼리 속도를 높입니다. |
| 70 | **D** | Serverless 컴퓨팅은 자동으로 리소스를 프로비저닝하고 확장하여 SLA 요구사항에 맞춥니다. |
| 71 | **A** | Lazy evaluation을 통해 변환이 실행 전에 최적화됩니다. |
| 72 | **A** | CREATE TABLE, USE SCHEMA, USE CATALOG 권한이 최소 권한 원칙을 따릅니다. |
| 73 | **C** | MERGE는 중복 레코드 작성을 방지하면서 데이터를 쓸 수 있습니다. |
| 74 | **A** | `CREATE TABLE employees (...)`는 테이블을 생성하는 DDL 작업입니다. |
| 75 | **A** | Databricks Jobs는 재현 가능한 ETL 워크플로를 만들고 예약하며 재시도 및 모니터링을 지원합니다. |
| 76 | **A** | 리니지 기능은 노트북, 다른 테이블, 보고서에서 테이블이 사용되는 곳을 포함한 모든 의존성을 시각화합니다. |
| 77 | **C** | Production 모드 + Continuous에서는 파이프라인이 종료될 때까지 업데이트되고 중지 시 컴퓨팅 리소스가 종료됩니다. |
| 78 | **B** | Repair run은 실패한 태스크만 다시 실행하여 다운타임과 비용을 최소화합니다. |
| 79 | **E** | Data Explorer에서 테이블에 대한 권한을 검토할 수 있습니다. |
| 80 | **C** | Silver 레이어는 정리되고 유효성이 검증된 마스터 고객 데이터에 적합합니다. |
| 81 | **A** | Gold 테이블은 Silver 테이블보다 집계를 더 많이 포함할 가능성이 높습니다. |
| 82 | **A** | 개방형 공유 프로토콜을 사용한 Delta Sharing으로 Databricks가 아닌 외부 파트너와도 안전하게 데이터를 공유할 수 있습니다. |
| 83 | **D** | 자주 변경되는 쿼리 필터에는 Automatic Liquid Clustering으로 전환하는 것이 적합합니다. |
| 84 | **A** | count_if(col1 > 1)=3 (값 2, 2, 3), count(*)=6 (모든 행), count(col1)=5 (NULL 제외). |
| 85 | **B** | `header` 옵션은 첫 번째 행에서 열 이름을 추론합니다. |
| 86 | **E** | Merge 작업은 Databricks Repos 외부에서 수행해야 합니다. |
| 87 | **E** | 스트림 소스로 사용하려면 `spark.read`를 `spark.readStream`으로 교체합니다. |
| 88 | **A** | `dbutils.widgets`로 작업 내 여러 태스크 간 매개변수를 전달할 수 있습니다. |
| 89 | **E** | Table은 다른 세션에서 사용 가능하고 물리적으로 저장되는 데이터 엔터티입니다. |
| 90 | **A** | OPTIMIZE는 멱등성이 있어 동일한 데이터로 두 번 실행해도 효과가 없습니다. |
| 91 | **D** | `trigger(processingTime="5 seconds")`로 5초마다 마이크로 배치를 실행합니다. |
| 92 | **B** | Databricks 디버거는 잘못된 데이터 유형이 제출되면 오류를 발생시키는 중단점을 설정할 수 있습니다. |
| 93 | **C** | Delta Sharing 설정에 필요한 첫 번째 정보는 파트너의 Unity Catalog 메타스토어 공유 식별자입니다. |
| 94 | **A** | Databricks Asset Bundles(DAB) + GitHub 통합이 프로덕션 배포의 모범 사례입니다. |
| 95 | **D** | Asset Bundle은 아티팩트, 리소스, 구성을 지정하는 YAML 구성 파일입니다. |
| 96 | **B** | Delta Sharing을 통해 데이터셋과 노트북을 공유하고 Unity Catalog로 권한을 관리합니다. |
| 97 | **A** | DLT는 동일한 파이프라인에서 SQL과 Python을 모두 지원하므로 변경이 필요하지 않습니다. |
| 98 | **A** | 소량의 데이터로 대화식으로 작업할 때 단일 노드 클러스터가 적합합니다. |
| 99 | **D** | Silver 테이블은 항상 Bronze 테이블보다 더 정제되고 깨끗한 데이터 보기를 포함합니다. |
| 100 | **B** | Executor는 워커 노드에서 태스크를 실행하는 구성 요소입니다. |
| 101 | **B** | OPTIMIZE는 작은 파일을 더 큰 파일로 압축합니다. |
| 102 | **A** | Job Cluster는 일정에 따른 대규모 배치 ETL에 비용 효율적이고 자동 확장이 가능합니다. |
| 103 | **B** | `pathGlobFilter` 옵션으로 `*.png` 파일만 필터링합니다. |
| 104 | **B** | Delta 트랜잭션 로그에서 버전 번호를 식별하고 VERSION AS OF 구문으로 쿼리하거나 새 테이블로 내보냅니다. |
| 105 | **A** | Watermarking으로 특정 시간 창 내의 늦게 도착하는 레코드를 올바르게 처리합니다. |
| 106 | **C** | ON VIOLATION DROP ROW는 위반 레코드를 삭제하고 이벤트 로그에 기록합니다. |
| 107 | **C** | 외부 테이블이기 때문에 DROP TABLE 시 메타데이터만 삭제되고 데이터 파일은 유지됩니다. |
| 108 | **C** | Jobs UI의 Runs 탭에서 활성 실행을 클릭하여 노트북을 검토합니다. |
| 109 | **D** | Delta Live Tables의 기대(Expectations)를 사용하여 데이터 품질 모니터링을 자동화합니다. |
| 110 | **B** | 데이터를 증분적으로 처리해야 할 때 CREATE STREAMING LIVE TABLE을 사용합니다. |
| 111 | **E** | `spark.table("sales")`로 PySpark에서 Delta 테이블에 액세스합니다. |
| 112 | **B** | Caching으로 중간 결과를 메모리에 저장하여 성능을 개선합니다. |
| 113 | **BE** | Compute Orchestration과 Unity Catalog가 컨트롤 플레인에서 기능합니다. |
| 114 | **A** | Databricks SQL의 쿼리 페이지에서 1일마다 새로 고침을 예약합니다. |
| 115 | **A** | failOnNewColumns는 새 열이 나타나면 수집 작업을 즉시 실패시킵니다. |
| 116 | **B** | append 모드는 기존 데이터를 보존하면서 새 레코드를 추가합니다. |
| 117 | **D** | Delta Lake는 배치 및 스트리밍 워크로드를 모두 지원합니다. |
| 118 | **B** | DESCRIBE HISTORY는 Delta 테이블의 전체 작업 기록을 제공합니다. |
| 119 | **B** | 리포지토리 루트에 정확히 하나의 databricks.yml을 배치합니다. |
| 120 | **A** | DLT는 자동 데이터 품질 검사, 스키마 진화 내장 지원, 선언적 파이프라인 개발을 제공합니다. |
| 121 | **E** | 오픈 소스 기술 수용의 이점은 벤더 종속성 회피입니다. |
| 122 | **C** | 스키마 소유권을 이전하면 소유자가 스키마 및 포함된 객체에 대한 권한을 관리할 수 있습니다. |
| 123 | **C** | 데이터셋을 재파티셔닝하여 모든 노드에 걸쳐 균등하게 분산시킵니다. |
| 124 | **C** | Delta 테이블은 데이터, 기록, 메타데이터를 포함하는 파일 컬렉션에 저장됩니다. |
| 125 | **A** | `trigger(availableNow=True)`로 사용 가능한 모든 데이터를 처리합니다. |
| 126 | **A** | DLT 기대로 `CONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL) ON VIOLATION DROP ROW`를 사용합니다. |
| 127 | **A** | PySpark 함수(sum, avg, count)를 alias와 함께 `.agg()` 내에서 사용합니다. |
| 128 | **B** | OPTIMIZE는 작은 파일을 더 큰 파일로 압축합니다. |
| 129 | **B** | Job 클러스터의 최대 출력은 10MB입니다. |
| 130 | **C** | 높은 CPU 시간 대 Task 시간은 CPU 과다 활용을 의미하며 실행기/코어 튜닝이 필요합니다. |
| 131 | **A** | `dropDuplicates`로 중복 행을 제거합니다. |
| 132 | **C** | MERGE INTO는 단일 문에서 삽입 및 업데이트 로직을 모두 지원합니다. |
| 133 | **B** | ON VIOLATION FAIL UPDATE는 위반 시 작업을 실패하게 합니다. |
| 134 | **A** | DLT 파이프라인은 SQL과 Python으로 다른 노트북 소스를 가질 수 있습니다. |
| 135 | **B** | Pro SQL Warehouse는 고성능, 비용 효율적인 쿼리 실행에 최적화되어 있습니다. |
| 136 | **E** | 쿼리 스케줄러에서 특정 날짜에 종료되도록 새로 고침 일정을 설정합니다. |
| 137 | **C** | COPY INTO는 이미 복사된 파일을 다시 복사하지 않습니다(멱등성). |
| 138 | **B** | mergeSchema 옵션으로 스키마 진화를 자동으로 처리합니다. |
| 139 | **B** | UNION은 두 테이블의 모든 레코드를 중복 없이 결합합니다. |
| 140 | **A** | `CREATE FUNCTION combine_nyc(city STRING) RETURNS STRING RETURN CASE...`가 올바른 SQL UDF 구문입니다. |
| 141 | **C** | SELECT 권한으로 쿼리만 허용하고 수정은 방지합니다. |
| 142 | **A** | `GRANT ALL PRIVILEGES ON TABLE sales TO team;`으로 전체 권한을 부여합니다. |
| 143 | **A** | groupBy로 그룹화 작업을 수행합니다. |
| 144 | **B** | Time Travel로 이전 스냅샷을 쿼리합니다. |
| 145 | **D** | Databricks 서버리스 컴퓨팅은 자동으로 리소스를 최적화하고 클러스터 관리를 추상화합니다. |
| 146 | **D** | 대상 테이블에 중복 레코드가 포함될 수 없을 때 MERGE INTO를 사용합니다. |
| 147 | **C** | Delta Lake는 ACID 트랜잭션과 스키마 적용을 지원하는 스토리지 형식입니다. |
| 148 | **C** | Delta Sharing은 추가 구성 없이 크로스 클라우드 데이터 공유를 지원합니다. |
| 149 | **A** | Databricks 자산 번들은 YAML 형식을 사용합니다. |
| 150 | **E** | `GRANT ALL PRIVILEGES ON DATABASE customers TO team;`으로 전체 권한을 부여합니다. |
| 151 | **B** | PySpark로 쿼리를 래핑하고 Python의 제어 흐름으로 마지막 쿼리 실행 시기를 결정합니다. |
| 152 | **A** | 자동 확장이 있는 All Purpose Cluster가 대화식 개발과 PoC에 최적입니다. |
| 153 | **D** | Temporary view는 현재 세션에서만 사용되고 물리적 데이터를 저장하지 않습니다. |
| 154 | **C** | `DELETE FROM my_table WHERE age > 25;`로 age > 25인 행을 제거합니다. |
| 155 | **B** | union으로 동일 스키마의 두 데이터셋을 행 단위로 결합합니다. |
| 156 | **AB** | A: VERSION 4는 UPDATE 이전. B: 타임스탬프 '14:32:47'은 VERSION 4에 해당하여 UPDATE 이전입니다. |
| 157 | **AB** | Serverless 컴퓨팅 클러스터는 SQL과 Python을 지원합니다. |
| 158 | **C** | Data Explorer의 테이블 페이지에서 Owner 필드를 검토합니다. |
| 159 | **B** | `trigger(availableNow=True)`로 사용 가능한 모든 데이터를 처리합니다. |
| 160 | **C** | SQL 엔드포인트의 Auto Stop 기능을 켜서 필요할 때만 실행되도록 합니다. |
| 161 | **C** | Databricks SQL의 쿼리 페이지에서 1일마다 새로 고침을 예약합니다. |
| 162 | **A** | 외부 테이블은 LOCATION이 외부 위치의 특정 경로를 가리킵니다. |
| 163 | **D** | Serverless SQL Warehouse는 자동 확장, 인프라 관리 불필요, 사용량 기반 비용 청구를 제공합니다. |
| 164 | **C** | Catalog Explorer에서 테이블에 대한 권한을 검토합니다. |
| 165 | **C** | `spark.sql`로 SQL 쿼리를 실행하고 결과를 PySpark에서 사용합니다. |
| 166 | **A** | `OPTIMIZE ZORDER BY`로 Z-ordering을 적용합니다. |
| 167 | **A** | VACUUM 명령이 오래된 데이터 파일을 삭제하여 시간 여행이 불가능해졌습니다. |
| 168 | **B** | `CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL UPDATE`로 위치가 NULL이면 파이프라인을 종료합니다. |
| 169 | **D** | DLT Expectations로 유효하지 않은 데이터를 삭제하면서 스트림을 실패시키지 않습니다. |
| 170 | **A** | `spark.sql.shuffle.partitions` 구성을 조정하여 메모리 스필을 줄입니다. |
| 171 | **D** | DESCRIBE HISTORY로 OPTIMIZE 작업이 실행되었는지 확인합니다. |
| 172 | **B** | Unity Catalog 리니지는 테이블 레벨에서만 관계를 시각화하며 노트북, 작업, 대시보드로는 확장되지 않습니다. |
| 173 | **C** | Pull 작업으로 중앙 Git 리포지토리의 변경 사항을 동기화합니다. |
| 174 | **C** | Bronze 레이어에 기록 이벤트 데이터를 저장하여 비용을 절감합니다. |
| 175 | **A** | Bronze 레이어는 변환 없이 원시 데이터를 수집하고 원본 스키마를 보존하며 Delta 형식으로 저장합니다. |
| 176 | **D** | Cron 구문으로 복잡한 실행 일정을 프로그래밍 방식으로 표현하고 제출합니다. |
| 177 | **A** | `sales_df.groupBy("category").agg(sum("sales_amount").alias("total_sales_amount"))`가 올바릅니다. |
| 178 | **A** | SQL 엔드포인트의 Auto Stop 기능을 켜서 총 실행 시간을 최소화합니다. |
| 179 | **A** | partitionBy로 특정 열을 기반으로 데이터를 디렉토리로 물리적으로 분할합니다. |
| 180 | **D** | 정합된 customer_transactions는 Silver에, 집계된 보고서 테이블은 Gold에 배치합니다. |
| 181 | **A** | Auto Loader는 클라우드 스토리지에서 새 파일을 자동으로 수집하고, 배치/스트리밍 모두 지원하며, 스키마 진화를 처리합니다. |
| 182 | **A** | 단일 태스크 워크플로에서는 태스크를 복구(Repair the task)합니다. |
| 183 | **B** | Databricks Repos는 여러 브랜치 사용을 지원합니다. |
| 184 | **B** | customer_id와 purchase_date 모두에 Liquid Clustering을 적용합니다. |
| 185 | **D** | DLT 파이프라인 페이지에서 각 테이블을 클릭하고 데이터 품질 통계를 확인합니다. |
| 186 | **E** | `CREATE OR REPLACE TABLE table_name (employeeId STRING, startDate DATE, avgRating FLOAT)`가 올바릅니다. |
| 187 | **B** | VACUUM은 사용되지 않는 오래된 데이터 파일을 제거하여 스토리지 공간을 회수합니다. |
| 188 | **C** | `DESCRIBE DATABASE customer360;`으로 데이터베이스 위치를 반환합니다. |
| 189 | **B** | Lakehouse Federation으로 데이터를 복제하지 않고 두 데이터 소스를 직접 쿼리합니다. |
| 190 | **B** | Auto Loader는 Spark Structured Streaming을 사용하여 데이터를 증분적으로 처리합니다. |
| 191 | **A** | `INSERT INTO my_table VALUES ('a1', 6, 9.4)`가 올바른 구문입니다. |
| 192 | **A** | 관리 테이블로 Unity Catalog가 메타데이터와 기본 데이터 수명 주기를 모두 관리합니다. |
| 193 | **D** | Unity Catalog로 각 외부 테이블에 대한 세분화된 액세스 제어 및 권한을 관리합니다. |
| 194 | **B** | JSON 데이터는 텍스트 기반 형식이므로 유형 추론 없이 모든 열이 문자열로 추론됩니다. |
| 195 | **C** | Parquet 파일은 잘 정의된 스키마를 가지고 있어 CSV보다 이점이 있습니다. |
| 196 | **C** | 리니지 기능은 노트북, 다른 테이블, 보고서의 모든 의존성을 시각화합니다. |
| 197 | **B** | Job 페이지에서 Alert을 설정하여 실패 시 이메일을 보냅니다. |
| 198 | **A** | Auto Loader는 항상 스트리밍 워크로드와 호환됩니다. |
| 199 | **C** | LEFT JOIN은 sales의 모든 행을 유지하고 일치하지 않는 행에는 NULL을 표시합니다: a1/28.94/s1, a3/874.12/NULL, a4/8.99/s2. |
| 200 | **A** | Serverless compute for workflows로 인스턴스 선택, 확장, Photon, 런타임 업그레이드를 자동으로 관리합니다. |
| 201 | **A** | `FILTER(employees, i -> i.years_exp > 5) AS exp_employees`가 올바른 구문입니다. |
| 202 | **A** | Bronze 레이어는 로드 날짜/시간, 프로세스 ID와 같은 메타데이터 열을 추가합니다. |
| 203 | **A** | 클러스터 풀은 미리 준비된 클러스터로 자동 보고서를 가능한 빨리 새로 고칠 수 있게 합니다. |
| 204 | **B** | MEMORY_AND_DISK는 메모리에 맞지 않는 경우 디스크에도 저장합니다. |
| 205 | **A** | Databricks 감사 로그는 JSON 형식으로 이벤트를 출력합니다. |
| 206 | **B** | SQL 엔드포인트의 스케일링 범위의 최대 한도를 늘려 동시 쿼리 성능을 개선합니다. |
| 207 | **B** | 작은 룩업 테이블에는 Broadcast join으로 조인 성능을 개선합니다. |
| 208 | **E** | 다른 태스크가 성공적으로 완료된 후 새 태스크가 시작되어야 할 때 Depends On을 사용합니다. |
| 209 | **B** | `sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))`로 리전별 총 매출을 계산합니다. |
| 210 | **D** | 새 webhook 알림 대상으로 Alert을 설정합니다. |
| 211 | **B** | Data lakehouse로 두 팀이 동일한 소스 오브 트루스를 사용합니다. |
| 212 | **E** | Data lakehouse가 사일로화된 데이터 아키텍처를 단순화하고 통합합니다. |
| 213 | **A** | UDF 사용 시 로컬 Python 마이너 버전을 클러스터와 일치시키고 호환 가능한 Databricks Connect 패키지를 사용합니다. |
| 214 | **DE** | Gold 레이어는 비정규화되고 읽기 최적화된 테이블을 포함합니다. |
| 215 | **C** | Python 노트북 인터랙티브 디버거로 코드 실행을 단계별로 수행하고 변수를 실시간 검사합니다. |
| 216 | **C** | STREAM 함수는 customers 테이블이 스트리밍 라이브 테이블이기 때문에 포함됩니다. |
| 217 | **C** | 워크스페이스 관리자가 소유권을 이전해야 합니다. |
| 218 | **B** | 파티션 프루닝으로 파티션 열 필터링 시 성능이 향상됩니다. |
| 219 | **A** | `org.apache.spark.sql.jdbc`로 JDBC를 통해 SQLite 데이터베이스에 연결합니다. |
| 220 | **B** | Unity Catalog가 활성화되어 있고 Databricks Connect 버전이 서버리스를 지원하는지 확인합니다. |
| 221 | **C** | `CREATE TABLE ... LOCATION 'path'`로 외부 데이터를 참조하는 테이블을 생성합니다. |
| 222 | **C** | Silver 레이어는 원시 Bronze 데이터를 검증, 정리, 중복 제거합니다. |
| 223 | **D** | `COMMENT "Contains PII"`로 테이블에 PII 포함을 나타내는 속성을 추가합니다. |
| 224 | **C** | 새 webhook 알림 대상으로 Alert을 설정합니다. |
| 225 | **E** | raw 데이터에서 Bronze로의 스트리밍 hop은 `spark.readStream.load(rawSalesLocation)` → writeStream → append입니다. |
| 226 | **B** | `USING CSV`로 CSV 파일에서 테이블을 생성합니다. |
| 227 | **A** | 편향된 키 값으로 인해 일부 파티션에 레코드가 집중되는 것은 데이터 스큐(Data skew)입니다. |
| 228 | **B** | 자주 실행되고 효율적인 Python 기반 데이터 변환 파이프라인이 서버리스 마이그레이션의 첫 번째 단계입니다. |
