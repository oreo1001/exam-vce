# Databricks 공인 데이터 엔지니어 어소시에이트 시험

**시험명:** Databricks-Certified-Data-Engineer-Associate  
**버전:** V15.65

---

## NO.1
소규모 애드혹 Python 스크립트를 높은 빈도로 실행해야 하며, 쿼리가 완료된 후 빠르게 종료되어야 하는 시나리오에서 어떤 컴퓨팅 옵션을 선택해야 합니까?

A. All-purpose Cluster  
B. Job Cluster  
C. Serverless Compute  
D. SQL Warehouse  

---

## NO.2
데이터 엔지니어가 PySpark를 사용하여 데이터셋을 처리하는 Databricks의 Python 노트북을 디버깅하고 있습니다. 노트북이 DataFrame 변환 중 오류로 실패합니다. 엔지니어는 입력 DataFrame 및 중간 결과와 같은 변수의 상태를 검사하여 오류가 발생하는 위치를 식별하고자 합니다. 엔지니어가 DataFrame과 같은 변수의 값을 검사하기 위해 어떤 도구를 사용해야 합니까?

A. Databricks CLI를 사용하여 드라이버 로그를 다운로드하고 분석하여 자세한 오류 메시지 확인  
B. Python 노트북 인터랙티브 디버거를 사용하여 중단점을 설정하고 실시간으로 변수 값 검사  
C. Ganglia UI를 사용하여 클러스터 리소스 사용량을 모니터링하고 하드웨어 문제 식별  
D. Spark UI를 사용하여 실행 계획을 분석하고 작업이 실패한 단계 식별  

---

## NO.3
데이터 엔지니어가 다음 명령을 사용하여 새 데이터베이스를 생성했습니다:  
`CREATE DATABASE IF NOT EXISTS customer360;`  
customer360 데이터베이스는 다음 중 어느 위치에 저장됩니까?

A. dbfs:/user/hive/database/customer360  
B. dbfs:/user/hive/warehouse  
C. dbfs:/user/hive/customer360  
D. 정확한 응답을 결정하려면 추가 정보가 필요합니다  
E. dbfs:/user/hive/database  

---

## NO.4
데이터 엔지니어에게 새로운 데이터 레코드가 주어졌습니다:  
id STRING = 'a1'  
rank INTEGER = 6  
rating FLOAT = 9.4  
기존 Delta 테이블 my_table에 새 레코드를 추가하는 데 사용할 수 있는 SQL 명령은 다음 중 무엇입니까?

A. UPDATE my_table VALUES ('a1', 6, 9.4)  
B. INSERT VALUES ('a1', 6, 9.4) INTO my_table  
C. my_table UNION VALUES ('a1', 6, 9.4)  
D. INSERT INTO my_table VALUES ('a1', 6, 9.4)  
E. UPDATE VALUES ('a1', 6, 9.4) my_table  

---

## NO.5
데이터 엔지니어가 워크플로에서 여러 태스크를 예약하려고 하며, 각 태스크는 이전 태스크의 성공적인 완료에 의존합니다. 워크플로는 재시도와 모니터링을 지원해야 합니다. 어떤 Databricks 기능을 사용해야 합니까?

A. Delta Lake  
B. Databricks Jobs  
C. DBFS  
D. Spark UI  

---

## NO.6
데이터 엔지니어가 Databricks에서 Unity Catalog를 구성하고 있으며, 특정 스키마 내의 다양한 데이터 객체에 대한 권한을 부여하고 취소할 수 있는 역할을 사용자에게 할당해야 합니다. 단, 스키마 또는 해당 객체에 대한 읽기/쓰기 액세스 권한은 없어야 합니다. 데이터 엔지니어가 이 사용자에게 어떤 역할을 할당해야 합니까?

A. Table Owner  
B. Catalog Owner  
C. Schema Owner  
D. 스키마에 대한 USE catalog/schema 권한  

---

## NO.7
Python 사용이 처음인 데이터 엔지니어가 두 정수를 더하고 합계를 반환하는 Python 함수를 만들어야 합니다. 다음 중 이 작업을 완료하는 데 사용할 수 있는 코드 블록은 무엇입니까?

A. `function add_integers(x, y): return x + y`  
B. `function add_integers(x, y): x + y`  
C. `def add_integers(x, y): print(x + y)`  
D. `def add_integers(x, y): return x + y`  
E. `def add_integers(x, y): x + y`  

---

## NO.8
데이터 엔지니어가 클라우드 스토리지 위치에 도착하는 JSON 파일을 읽는 스트리밍 파이프라인을 구축하고 있습니다. 파이프라인은 수동 개입 없이 새 파일이 도착하면 자동으로 처리해야 합니다. 이 사용 사례에 적합한 Databricks 기능은 무엇입니까?

A. Structured Streaming Auto Loader  
B. Delta Time Travel  
C. Spark Cache  
D. Broadcast Join  

---

## NO.9
다음 중 테이블을 긴 형식에서 넓은 형식으로 변환하는 데 사용할 수 있는 SQL 키워드는 무엇입니까?

A. TRANSFORM  
B. PIVOT  
C. SUM  
D. CONVERT  
E. WHERE  

---

## NO.10
데이터 엔지니어가 Databricks에 Python 노트북이 있지만, 셀 내에서 SQL을 사용하여 특정 작업을 수행해야 합니다. 다른 모든 셀은 변경 없이 Python을 계속 사용하길 원합니다. Python 노트북의 셀 내에서 SQL을 사용하는 방법은 무엇입니까?

A. Python 노트북에서 SQL을 사용하는 것은 불가능합니다  
B. 셀을 Databricks 클러스터가 아닌 SQL 엔드포인트에 연결할 수 있습니다  
C. 셀에 SQL 구문을 그냥 작성할 수 있습니다  
D. 셀의 첫 번째 줄에 %sql을 추가할 수 있습니다  
E. 노트북의 기본 언어를 SQL로 변경할 수 있습니다  

---

## NO.11
조직이 MySQL, Amazon Redshift, Google BigQuery를 포함한 여러 외부 시스템에 데이터를 저장하고 있습니다. 데이터 엔지니어는 Databricks에 직접 수집하지 않고 분석을 수행하면서 통합 거버넌스를 보장하고 데이터 중복을 최소화하려고 합니다. Databricks의 어떤 기능이 중앙 집중식 거버넌스를 유지하면서 이러한 외부 데이터 소스를 쿼리할 수 있게 합니까?

A. Delta Lake  
B. Lakehouse Federation  
C. MLflow  
D. Databricks Connect  

---

## NO.12
데이터 엔지니어가 동일한 Spark 세션 내에서 사용할 중간 데이터를 임시 뷰에 저장하려고 합니다. 데이터는 세션이 끝난 후 유지되면 안 됩니다. 어떤 Spark SQL 명령을 사용해야 합니까?

A. CREATE TABLE  
B. CREATE VIEW  
C. CREATE TEMP VIEW  
D. CREATE DATABASE  

---

## NO.13
다음 중 member_id 열의 null 값 수를 반환하는 명령은 무엇입니까?

A. SELECT count(member_id) FROM my_table;  
B. SELECT count(member_id) - count_null(member_id) FROM my_table;  
C. SELECT count_if(member_id IS NULL) FROM my_table;  
D. SELECT null(member_id) FROM my_table;  
E. SELECT count_null(member_id) FROM my_table;  

---

## NO.14
데이터 엔지니어가 매일 아침 작업 시작 전에 실행되는 단일 태스크 Job이 있습니다. 업스트림 데이터 문제를 식별한 후, 원래 태스크 이전에 새 노트북을 실행하는 다른 태스크를 설정해야 합니다. 다음 중 새 태스크를 설정하는 데 사용할 수 있는 방법은 무엇입니까?

A. 기존 Job에서 기존 태스크를 복제하고 새 노트북을 실행하도록 업데이트할 수 있습니다  
B. 기존 Job에 새 태스크를 생성한 다음 원래 태스크의 의존성으로 추가할 수 있습니다  
C. 기존 Job에 새 태스크를 생성한 다음 새 태스크의 의존성으로 원래 태스크를 추가할 수 있습니다  
D. 새 Job을 처음부터 만들고 두 태스크를 동시에 실행하도록 추가할 수 있습니다  
E. 기존 태스크를 새 Job으로 복제한 다음 새 노트북을 실행하도록 편집할 수 있습니다  

---

## NO.15
데이터 엔지니어가 여러 워크스페이스에서 데이터 자산에 대한 액세스를 제어하고 중앙 집중식 거버넌스 정책을 시행해야 합니다. 조직은 테이블, 스키마, 카탈로그에 대한 세분화된 액세스 제어를 원합니다. 이 요구사항을 지원하는 Databricks 기능은 무엇입니까?

A. DBFS  
B. Unity Catalog  
C. Delta Cache  
D. MLflow  

---

## NO.16
다음 중 기존 데이터 레이크에 비해 데이터 품질이 향상되는 데이터 레이크하우스 기능은 무엇입니까?

A. 데이터 레이크하우스는 구조화 및 비구조화 데이터에 대한 스토리지 솔루션을 제공합니다  
B. 데이터 레이크하우스는 ACID 호환 트랜잭션을 지원합니다  
C. 데이터 레이크하우스는 데이터 검사를 위한 SQL 쿼리 사용을 허용합니다  
D. 데이터 레이크하우스는 개방형 형식으로 데이터를 저장합니다  
E. 데이터 레이크하우스는 머신러닝 및 인공지능 워크로드를 지원합니다  

---

## NO.17
데이터 엔지니어가 Databricks에서 Delta Live Tables(DLT)를 사용하여 고객 데이터를 수집하는 간단한 데이터 파이프라인을 구축하고 있습니다. 원시 고객 데이터는 클라우드 스토리지 위치에 JSON 형식으로 저장되어 있습니다. 원시 JSON 데이터를 읽고 Delta 테이블에 쓰는 DLT 파이프라인을 만드는 올바른 코드 스니펫은 무엇입니까?

A. `import dlt` → `@dlt.table` → `spark.read.format("csv").load("s3://...")`  
B. `import dlt` → `@dlt.view` → `spark.format.json("s3://...")`  
C. `import dlt` → `@dlt.table` → `spark.read.json("s3://...")`  
D. `import dlt` → `@dlt.table` → `spark.read.format("parquet").load("s3://...")`  

---

## NO.18
데이터 엔지니어가 다른 부서의 팀이 공유 데이터에 액세스해야 하는 다중 팀 프로젝트에 대해 Delta Sharing을 구성하고 있습니다. 목표는 내부 팀이 전체 권한으로 공유 데이터에 액세스할 수 있고 외부 파트너는 데이터만 읽을 수 있도록 하는 것입니다. 공유를 올바르게 구성하기 위해 데이터 엔지니어가 취해야 할 조치는 무엇입니까?

A. Delta Share를 만들고, 내부 팀과 외부 파트너를 위한 보안 액세스 URL을 설정하고, URL을 배포하여 공유 데이터에 대한 액세스를 제공합니다  
B. Delta Share를 만들고, 내부 팀의 테이블과 뷰를 추가하고, 외부 파트너와 내부 팀 모두에게 READ/WRITE 권한을 할당합니다  
C. Delta Share를 통해 외부 파트너에게 READ 권한을, 내부 팀에게 READ/WRITE 권한을 할당하고, 올바른 테이블과 뷰가 공유되었는지 확인합니다  
D. Delta Share를 통해 외부 파트너에게 READ 권한을, 내부 팀에게 READ/WRITE 권한을 부여합니다  

---

## NO.19
새로운 데이터 엔지니어링 팀이 프로젝트에 배정되었습니다. 팀은 이미 존재하는 테이블을 확인하기 위해 데이터베이스 customers에 대한 액세스가 필요합니다. 팀에는 자체 그룹 team이 있습니다. 새 팀에게 전체 데이터베이스에 필요한 권한을 부여하는 데 사용할 수 있는 명령은 무엇입니까?

A. GRANT VIEW ON CATALOG customers TO team;  
B. GRANT CREATE ON DATABASE customers TO team;  
C. GRANT USAGE ON CATALOG team TO customers;  
D. GRANT CREATE ON DATABASE team TO customers;  
E. GRANT USAGE ON DATABASE customers TO team;  

---

## NO.20
데이터 엔지니어가 ETL 프로세스에 대한 통합 테스트를 개발하고 외부 작업 스케줄러를 사용하여 버전 제어된 패키지 워크플로를 프로덕션에 배포해야 합니다. 이 작업에 어떤 도구를 사용해야 합니까?

A. Databricks Connect  
B. Databricks Asset Bundles  
C. Databricks Command Line Interface  
D. Databricks Software Development Kit  

---

## NO.21
데이터 엔지니어가 파이프라인의 빠른 반복을 유지하면서 잘못된 수집 후 안정적인 롤백, 규제 준수를 위한 감사 추적, AI 및 BI 워크로드 모두에 대한 단일 소스 오브 트루스에 대한 일관된 액세스를 보장해야 합니다. 이러한 요구를 충족하기 위해 데이터 엔지니어가 적용해야 할 전략은 무엇입니까?

A. Delta Lake ACID 트랜잭션 및 시간 여행, 일관된 액세스 및 리니지를 위한 Unity Catalog 거버넌스  
B. 수동 파일 버전 관리 및 롤백을 위한 야간 복사가 포함된 DBFS CSV 스토리지  
C. 감사 추적 및 BI 배포를 위한 일시적 인메모리 DataFrame  
D. 복구 및 거버넌스를 위한 애드혹 SQL 쿼리가 포함된 클라우드 객체 스토리지만 사용  

---

## NO.22
데이터 엔지니어가 수십억 개의 레코드를 저장하는 Delta 테이블의 쿼리 성능을 최적화하려고 합니다. 쿼리가 transaction_date 열을 자주 필터링합니다. 데이터를 물리적으로 구성하고 쿼리 실행 중 스캔되는 데이터 양을 줄이기 위해 어떤 Delta Lake 기능을 적용해야 합니까?

A. Z-Ordering  
B. VACUUM  
C. Caching  
D. Broadcast join  

---

## NO.23
데이터 엔지니어가 Unity Catalog에서 샌드박스 스키마를 해제하고 있습니다. 일부 테이블은 완전히 제거할 수 있는 일시적 스테이징 출력이지만, 일부 테이블은 Databricks 외부의 다운스트림 작업에서 사용하는 공유 클라우드 스토리지를 가리킵니다. 카탈로그 객체를 정리할 때 공유 파일을 삭제하지 않아야 합니다. 관리 테이블과 외부 테이블을 삭제할 때 Unity Catalog는 어떻게 동작합니까?

A. 모든 테이블을 DROP합니다; Databricks는 관리 및 외부 테이블 모두에 대해 메타데이터만 제거합니다  
B. 일시적 관리 테이블과 외부 테이블을 DROP합니다; 두 가지 모두의 파일은 7일 동안 유지됩니다  
C. 관리 스테이징 테이블을 DROP하여 데이터와 메타데이터를 제거하고, 외부 테이블을 DROP하여 메타데이터만 제거합니다  
D. 외부 테이블을 먼저 DROP하여 파일을 삭제한 다음, 관리 테이블을 DROP하여 복구를 위해 파일을 유지합니다  

---

## NO.24
다음 중 Delta Lake 테이블의 데이터가 주로 저장되는 파일 형식은 무엇입니까?

A. Delta  
B. CSV  
C. Parquet  
D. JSON  
E. Databricks 전용의 독점적이고 최적화된 형식  

---

## NO.25
데이터 엔지니어가 Delta 테이블로의 스트리밍 수집 중 생성되는 작은 파일의 수를 줄여야 합니다. 작은 파일이 다운스트림 쿼리에서 성능 문제를 일으키고 있습니다. 쓰기 중 자동으로 작은 파일을 압축하는 Delta Lake 기능은 무엇입니까?

A. OPTIMIZE  
B. autoCompact  
C. VACUUM  
D. CACHE  

---

## NO.26
Databricks Unity Catalog의 거버넌스에 적용되는 두 가지 조건은 무엇입니까? (2개 선택)

A. Databricks 계정 콘솔 내에 1개 이상의 메타스토어를 가질 수 있지만 리전당 1개만 가능합니다  
B. 메타스토어가 위치와 연결되지 않은 경우 카탈로그와 스키마 모두 Unity Catalog에서 관리 위치를 가져야 합니다  
C. 메타스토어 내에 여러 카탈로그를 가질 수 있으며 1개의 카탈로그를 여러 메타스토어와 연결할 수 있습니다  
D. 카탈로그가 위치와 연결되지 않은 경우 스키마를 관리 위치와 연결하는 것이 필수입니다  
E. 메타스토어가 위치와 연결되지 않은 경우 카탈로그를 관리 위치와 연결하는 것이 필수입니다  

---

## NO.27
데이터 엔지니어가 클라우드 스토리지를 활용하는 Databricks 프로젝트에서 작업하고 있습니다. 스토리지 계정의 컨테이너에서 파일이 스토리지 계정 내에 도착하자마자 여러 JSON 파일을 로드하려고 합니다. Python을 사용하여 파일을 먼저 dataframe에 로드하고 예상대로 작동하는지 확인하기 위해 데이터 엔지니어가 따라야 할 구문은 무엇입니까?

A. `df = spark.read.json("input/path")`  
B. `df = spark.readStream.format("cloud").option("json").load("/input/path")`  
C. `df = spark.readStream.format("json".load("input/path")`  
D. `df = spark.readStream.format("cloudFiles").option("cloudFiles.format", "json").load("/input/path")`  

---

## NO.28
데이터 엔지니어가 삽입, 업데이트, 삭제를 포함하여 Delta Lake 테이블에 대한 모든 변경 사항을 시간 경과에 따라 추적하려고 합니다. 감사 목적으로 테이블의 이전 버전을 검토해야 합니다. 이 기능을 제공하는 Delta Lake 기능은 무엇입니까?

A. Time Travel  
B. Partitioning  
C. Caching  
D. Indexing  

---

## NO.29
회사가 Delta Sharing을 사용하여 다른 클라우드 제공업체 및 지리적 리전의 파트너와 협업하고 있습니다. 크로스 리전 또는 이그레스 비용으로 인해 추가 비용이 발생하는 것은 무엇입니까?

A. 동일한 클라우드 제공업체 및 리전 내에서 데이터 공유  
B. 클라우드 간 및 다른 지리적 리전 간 Delta Sharing을 통한 데이터 전송  
C. 동일한 데이터 센터 내에서 VPN을 사용하여 Delta Sharing 데이터 액세스  
D. 단일 클라우드 환경 내에서 내부 데이터 분석에 Delta Sharing 활용  

---

## NO.30
데이터 엔지니어가 개인 노트북에서 작업하며 클라우드 스토리지의 Delta Lake에 저장된 데이터에 대해 복잡한 변환을 수행해야 합니다. 엔지니어는 Databricks Connect를 사용하여 Databricks 클러스터와 상호 작용하고 로컬 IDE에서 작업하기로 결정합니다. Databricks Connect는 엔지니어가 로컬 머신에서 어떻게 원활하게 코드를 개발, 테스트, 디버깅할 수 있게 합니까?

A. Databricks에서 요구하는 특정 IDE를 사용하여 코드를 개발, 테스트, 디버깅할 수 있는 Databricks 런타임을 모방하는 로컬 환경을 제공합니다  
B. Databricks 자체 웹 인터페이스를 통해서만 코드를 개발, 테스트, 디버깅할 수 있는 Databricks 런타임을 모방하는 로컬 환경을 제공합니다  
C. 네트워크 연결 없이 로컬 머신에서 Spark 작업을 직접 실행할 수 있게 합니다  
D. 선호하는 IDE를 사용하여 코드를 개발, 테스트, 디버깅할 수 있는 Databricks 런타임을 모방하는 로컬 환경을 제공합니다  

---

## NO.31
다음 중 Silver 테이블에서 Gold 테이블로의 hop을 수행하는 Structured Streaming 쿼리는 무엇입니까?

A. `spark.readStream.load(rawSalesLocation)` → writeStream → append → "newSales"  
B. `spark.read.load(rawSalesLocation)` → writeStream → append → "newSales"  
C. `spark.table("sales").withColumn(...)` → writeStream → append → "newSales"  
D. `spark.table("sales").filter(...)` → writeStream → append → "newSales"  
E. `spark.table("sales").groupBy("store").agg(sum("sales"))` → writeStream → complete → "newSales"  

---

## NO.32
데이터 엔지니어가 데이터 파이프라인을 설계하고 있습니다. 소스 시스템이 다른 프로세스에서도 사용하는 공유 디렉토리에 파일을 생성합니다. 파일은 그대로 유지되어야 하며 디렉토리에 누적됩니다. 파이프라인에서 이전 실행 이후 어떤 파일이 새로운 것인지 식별하고, 각 실행에서 새 파일만 수집하도록 파이프라인을 설정해야 합니다. 이 문제를 해결하는 데 사용할 수 있는 도구는 무엇입니까?

A. Unity Catalog  
B. Delta Lake  
C. Databricks SQL  
D. Data Explorer  
E. Auto Loader  

---

## NO.33
다음 중 클래식 Databricks 아키텍처의 컨트롤 플레인에 완전히 호스팅되는 것은 무엇입니까?

A. Worker 노드  
B. JDBC 데이터 소스  
C. Databricks 웹 애플리케이션  
D. Databricks 파일시스템  
E. Driver 노드  

---

## NO.34
데이터 엔지니어가 워크플로가 일정에 따라 트리거되도록 하기 위해 어떤 방법을 적용해야 합니까?

A. 예약된 워크플로는 항상 실행되는 클러스터가 필요하며, 이는 더 비싸지만 처리 지연 시간을 줄여줍니다  
B. 예약된 워크플로는 구성된 소스에 데이터가 도착하면 처리합니다  
C. 예약된 워크플로는 클러스터가 파이프라인을 실행하는 데 충분한 시간만 실행되므로 리소스 소비 및 비용을 줄일 수 있습니다  
D. 예약된 워크플로는 수동으로 중지될 때까지 계속 실행됩니다  

---

## NO.35
데이터 엔지니어가 배치 ETL 파이프라인을 설계하고 관리하기 위해 Databricks 노트북에서 작업하고 있습니다. SQL 및 Python 코드를 작성하여 데이터를 정리, 변환하고, 다른 소스의 대규모 데이터셋을 결합합니다. 이러한 단계를 정기적으로 실행하고 데이터 파이프라인의 일부로 예약할 수 있는 구조화된 프로세스로 구성하려고 합니다. 이 사용 사례에 적용 가능한 Databricks 노트북 기능은 무엇입니까?

A. 실시간 스트리밍 지원  
B. 협업 편집  
C. 태스크 워크플로 및 작업 예약  
D. 노트북 버전 관리  

---

## NO.36
다음 중 Databricks 고객의 클라우드 계정에 저장되는 것은 무엇입니까?

A. Databricks 웹 애플리케이션  
B. 클러스터 관리 메타데이터  
C. Repos  
D. 데이터  
E. 노트북  

---

## NO.37
데이터 엔지니어가 들어오는 JSON 파일의 스키마 변경을 자동으로 감지하고 대상 Delta 테이블을 그에 따라 진화시키는 데이터 수집 파이프라인을 구현하고 있습니다. 이 자동 스키마 진화를 지원하는 기능은 무엇입니까?

A. Schema enforcement  
B. Schema evolution  
C. Partition pruning  
D. Broadcast join  

---

## NO.38
데이터 엔지니어가 status 열이 "inactive"인 레코드를 Delta 테이블에서 삭제하려고 합니다. 작업은 전체 데이터셋을 다시 작성하지 않고 영향을 받는 행만 수정해야 합니다. 어떤 SQL 명령을 사용해야 합니까?

A. UPDATE  
B. DELETE  
C. MERGE  
D. INSERT  

---

## NO.39
데이터 엔지니어링 팀이 실행 중이 아닌 SQL 엔드포인트에 제출될 때 Databricks SQL 쿼리가 너무 느리게 실행되는 것을 발견했습니다. 이 시나리오에서 결과를 반환하는 시간을 줄이기 위해 팀이 사용할 수 있는 방법은 무엇입니까?

A. SQL 엔드포인트의 Serverless 기능을 켜고 Spot 인스턴스 정책을 "Reliability Optimized"로 변경할 수 있습니다  
B. SQL 엔드포인트의 Auto Stop 기능을 켤 수 있습니다  
C. SQL 엔드포인트의 클러스터 크기를 늘릴 수 있습니다  
D. SQL 엔드포인트의 Serverless 기능을 켤 수 있습니다  
E. SQL 엔드포인트의 스케일링 범위의 최대 한도를 늘릴 수 있습니다  

---

## NO.40
데이터 엔지니어가 Spark SQL 테이블 my_table을 삭제하려고 다음 명령을 실행합니다:  
`DROP TABLE IF EXISTS my_table;`  
이 명령을 실행한 후 엔지니어는 데이터 파일과 메타데이터 파일이 파일 시스템에서 삭제된 것을 확인합니다. 이 모든 파일이 삭제된 이유는 무엇입니까?

A. 테이블이 관리 테이블이었습니다  
B. 테이블의 데이터가 10GB보다 작았습니다  
C. 테이블의 데이터가 10GB보다 컸습니다  
D. 테이블이 외부 테이블이었습니다  
E. 테이블에 위치가 없었습니다  

---

## NO.41
데이터 엔지니어에게 SQL 쿼리에서 사용하고 싶은 Python 변수 table_name이 있습니다. table_name을 사용하여 쿼리를 실행하는 Python 코드 블록을 구성하려고 합니다. 다음과 같은 불완전한 코드 블록이 있습니다:  
`____(f"SELECT customer_id, spend FROM {table_name}")`  
빈칸을 채워 작업을 성공적으로 완료하는 데 사용할 수 있는 것은 무엇입니까?

A. spark.delta.sql  
B. spark.delta.table  
C. spark.table  
D. dbutils.sql  
E. spark.sql  

---

## NO.42
데이터 엔지니어가 Spark SQL 기반의 ETL 프로세스를 개발하고 있습니다. 실행이 실패합니다. Spark UI를 확인하고 다음 오류를 볼 수 있습니다:  
"java.lang.OutofMemoryError: Java heap space"  
이 문제를 해결하기 위해 데이터 엔지니어가 수행해야 할 두 가지 교정 조치는 무엇입니까? (2개 선택)

A. 쿼리에서 더 적은 데이터를 수집하기 위해 필터를 좁힙니다  
B. 워커 노드를 업사이징하고 autoshuffle 파티션을 활성화합니다  
C. 드라이버 노드를 업사이징하고 autoshuffle 파티션을 비활성화합니다  
D. 쿼리 성능을 향상시키기 위해 데이터셋을 캐싱합니다  
E. 할당을 보장하기 위해 셔플 파티션을 50으로 고정합니다  

---

## NO.43
새 Delta Live Tables 파이프라인을 생성할 때 반드시 지정해야 하는 것은 무엇입니까?

A. 키-값 쌍 구성  
B. 선호하는 DBU/시간 비용  
C. 작성된 데이터에 대한 클라우드 스토리지 위치 경로  
D. 작성된 데이터에 대한 대상 데이터베이스의 위치  
E. 실행할 최소 하나의 노트북 라이브러리  

---

## NO.44
데이터 엔지니어가 Kafka의 클릭스트림 이벤트와 클라우드 객체 스토리지의 일일 제품 카탈로그를 수집하는 새로운 Databricks 파이프라인을 설정하고 있습니다. 감사 가능성과 쉬운 재처리를 보장하기 위해 모든 소스 데이터를 랜딩하려고 합니다. 이후 단계에서 데이터가 대시보드에 사용되기 전에 정리, 중복 제거, 비즈니스 모델링을 처리합니다. 메달리온 아키텍처 원칙에 맞는 접근 방식은 무엇입니까?

A. 두 소스 모두 비정규화된 스타 스키마로 Gold에 랜딩하여 전체 소스 충실도를 유지하면서 BI를 최적화합니다  
B. Kafka의 스트리밍 이벤트를 Silver에, 배치 데이터의 계층을 최소화하기 위해 제품 카탈로그를 직접 Gold에 랜딩합니다  
C. 두 소스 모두 최소한의 유효성 검사로 Bronze 레이어에 추가 전용으로 랜딩한 다음, 품질과 분석을 위해 Silver/Gold 다운스트림을 구축합니다  
D. 다운스트림 복잡성을 줄이기 위해 두 소스 모두 스키마 적용 및 중복 제거와 함께 Silver 레이어에 직접 랜딩합니다  

---

## NO.45
데이터 엔지니어가 분석 워크로드를 위해 설계된 서버리스 컴퓨팅 환경을 사용하여 Delta Lake에 저장된 데이터에 대해 SQL 쿼리를 직접 실행하려고 합니다. 이 기능을 제공하는 Databricks 구성 요소는 무엇입니까?

A. Databricks SQL Warehouse  
B. Spark Driver  
C. DBFS  
D. MLflow  

---

## NO.46
Databricks 단일 태스크 워크플로가 노트북의 오류로 인해 실패합니다. 데이터 엔지니어가 노트북의 실수를 수정합니다. 워크플로를 다시 실행하기 위해 데이터 엔지니어가 해야 할 일은 무엇입니까?

A. 태스크를 복구합니다  
B. 실행을 복구합니다  
C. 클러스터를 다시 시작합니다  
D. 클러스터를 교체합니다  

---

## NO.47
Delta Live Table 파이프라인에 STREAMING LIVE TABLE을 사용하여 정의된 두 개의 데이터셋이 포함되어 있습니다. 세 개의 데이터셋은 LIVE TABLE을 사용하여 Delta Lake 테이블 소스에 대해 정의되어 있습니다. 테이블은 Continuous Pipeline Mode를 사용하여 Development 모드로 실행되도록 구성되어 있습니다. 이전에 처리되지 않은 데이터가 존재하고 모든 정의가 유효하다고 가정할 때, Start를 클릭하여 파이프라인을 업데이트한 후 예상되는 결과는 무엇입니까?

A. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 종료됩니다. 컴퓨팅 리소스가 종료됩니다  
B. 파이프라인이 종료될 때까지 모든 데이터셋이 정해진 간격으로 업데이트됩니다. 파이프라인이 종료될 때까지 컴퓨팅 리소스가 유지됩니다  
C. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 처리 없이 유지됩니다. 컴퓨팅 리소스가 유지되지만 사용되지 않습니다  
D. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 종료됩니다. 추가 테스트를 허용하기 위해 컴퓨팅 리소스가 유지됩니다  
E. 파이프라인이 종료될 때까지 모든 데이터셋이 정해진 간격으로 업데이트됩니다. 추가 테스트를 허용하기 위해 컴퓨팅 리소스가 유지됩니다  

---

## NO.48
Python 파일이 프로덕션에 투입될 준비가 되었으며 클라이언트는 가장 저렴하면서도 효율적인 유형의 클러스터를 사용하고자 합니다. 워크로드는 매우 작아서 단순한 조인만으로 10GB의 데이터만 처리하며 복잡한 집계나 넓은 변환은 없습니다. 요구사항을 충족하는 클러스터는 무엇입니까?

A. Interactive cluster  
B. Spot 인스턴스가 활성화된 Job cluster  
C. Spot 인스턴스가 비활성화된 Job cluster  
D. Photon이 활성화된 Job cluster  

---

## NO.49
다음 중 소스로 Gold 테이블을 활용하는 데이터 워크로드는 무엇입니까?

A. 타임스탬프를 사람이 읽을 수 있는 형식으로 파싱하여 데이터를 풍부하게 하는 작업  
B. 표준 요약 통계를 만들기 위해 정리되지 않은 데이터를 집계하는 작업  
C. 잘못된 형식의 레코드를 제거하여 데이터를 정리하는 작업  
D. 대시보드에 공급하도록 설계된 집계 데이터를 쿼리하는 작업  
E. 스트리밍 소스에서 레이크하우스로 원시 데이터를 수집하는 작업  

---

## NO.50
데이터 엔지니어가 동일한 명령 셀에서 Python과 SQL을 작성하려고 하는데 오류가 발생합니다. 엔지니어는 Python 변수를 select 문에서 사용할 수 있다고 생각했습니다. 명령이 실패하는 이유는 무엇입니까?

A. Databricks는 동일한 셀에서 언어 상호 운용성을 지원하지만 Scala와 SQL 사이에서만 지원합니다  
B. Databricks는 여러 언어를 지원하지만 노트북당 하나만 지원합니다  
C. Databricks는 셀당 하나의 언어를 지원합니다  
D. Databricks는 언어 상호 운용성을 지원하지만 특수 문자를 사용하는 경우에만 지원합니다  

---

## NO.51
데이터 엔지니어가 고객 주문을 Kafka 토픽(orders_topic)으로 스트리밍하고 있으며 현재 DLT 파이프라인의 수집 스크립트를 작성하고 있습니다. Kafka 브로커에서 DLT로 데이터를 수집하기 위한 올바른 코드는 무엇입니까?

A. Python: `@dlt.table` → `spark.readStream.format("kafka")` → subscribe → load()  
B. Python: `@dlt.table` → `spark.readStream.format("cloud_files")` → load("kafka://...")  
C. SQL: `CREATE LIVE TABLE orders_raw AS SELECT CAST(value AS STRING) AS json_data FROM STREAM kafka.'broker:9092/orders_topic'`  
D. SQL: `CREATE STREAMING LIVE TABLE orders_raw AS SELECT ... FROM cloud_files("kafka://...", "json")`  

---

## NO.52
회사가 Databricks를 사용하지 않는 파트너와 협업하고 있으며 Delta 형식으로 저장된 대규모 기록 데이터셋에 대한 액세스가 필요합니다. 데이터 엔지니어는 파트너가 계정을 설정할 필요 없이 안전하게 읽기 전용 액세스로 데이터에 액세스할 수 있도록 해야 합니다. 데이터를 어떻게 공유해야 합니까?

A. 데이터셋을 CSV 파일로 내보내고 파트너의 시스템에 수동으로 파일을 전송합니다  
B. 파트너에게 Databricks 워크스페이스에 대한 액세스를 부여하고 Delta 테이블에 대한 전체 쓰기 권한을 할당합니다  
C. Unity Catalog를 사용하여 데이터셋을 공유하여 두 팀 모두 동일한 조직 내에서 데이터에 대한 전체 쓰기 액세스를 보장합니다  
D. Delta Sharing을 사용하여 데이터셋을 공유하며, Databricks 계정 없이도 보안되고 읽기 전용인 URL을 통해 파트너가 데이터에 액세스할 수 있도록 합니다  

---

## NO.53
Python 파일이 프로덕션에 준비되었으며 클라이언트는 가장 효율적이면서도 비용 효율적인 유형의 클러스터를 사용하고자 합니다. 워크로드는 매우 작아서 단순한 조인만으로 10GB의 데이터만 처리하며 복잡한 집계나 넓은 변환은 없습니다. 요구사항을 충족하는 클러스터는 무엇입니까?

A. Spot 인스턴스가 활성화된 Job cluster  
B. Photon이 활성화된 Job cluster  
C. Spot 인스턴스가 비활성화된 Job cluster  
D. Interactive cluster  

---

## NO.54
데이터 엔지니어가 회사의 사용자 정의 클라우드 네트워크 내 데이터베이스에 있는 데이터에 대해 탐색적 분석을 수행해야 합니다. SQL을 사용하고 있습니다. 많은 수의 쿼리를 빠르고 비용 효율적으로 처리할 수 있는 SQL Warehouse 유형은 무엇입니까?

A. Classic SQL Warehouse  
B. Serverless SQL Warehouse  
C. Pro SQL Warehouse  
D. All-purpose compute cluster  

---

## NO.55
데이터 엔지니어가 스트리밍 파이프라인을 설계하고 있으며 Spark가 집계 쿼리에 대한 상태 정보를 유지하는 기간을 제한하려고 합니다. 늦게 도착한 데이터를 얼마나 오래 처리할 수 있는지 정의하는 Structured Streaming 기능은 무엇입니까?

A. Watermark  
B. Cache  
C. Checkpoint  
D. Partition  

---

## NO.56
데이터 엔지니어가 Databricks를 사용하여 Kafka에서 Delta Lake 테이블로 스트리밍 데이터를 수집해야 합니다. 파이프라인은 정확히 한 번(exactly-once) 처리 의미론을 보장하고 장애에서 복구하기 위한 체크포인트 정보를 유지해야 합니다. 신뢰할 수 있는 처리와 내결함성을 보장하는 Spark Structured Streaming 기능은 무엇입니까?

A. Watermarking  
B. Checkpointing  
C. Caching  
D. Partition pruning  

---

## NO.57
데이터 엔지니어가 클라우드 스토리지에서 대규모 Parquet 데이터셋을 읽기 위해 Databricks에서 배치 처리 작업을 구성하고 있습니다. 수동으로 태스크를 할당하지 않고 Spark가 자동으로 여러 워커 노드에 걸쳐 계산을 분산시키길 원합니다. 자동 병렬 처리를 가능하게 하는 Spark 추상화는 무엇입니까?

A. DataFrame  
B. Cluster  
C. Executor  
D. Driver  

---

## NO.58
데이터 엔지니어가 개발 중 열 이름과 데이터 유형을 이해하기 위해 Spark DataFrame의 스키마를 검사하려고 합니다. 스키마를 트리 형식으로 출력하는 DataFrame 메서드는 무엇입니까?

A. printSchema  
B. showSchema  
C. describeSchema  
D. getSchema  

---

## NO.59
다음 중 Bronze 테이블과 원시 데이터 간의 관계를 설명하는 것은 무엇입니까?

A. Bronze 테이블은 원시 데이터 파일보다 적은 데이터를 포함합니다  
B. Bronze 테이블은 원시 데이터보다 더 진실된 데이터를 포함합니다  
C. Bronze 테이블은 집계를 포함하고 원시 데이터는 비집계입니다  
D. Bronze 테이블은 원시 데이터보다 덜 정제된 데이터 보기를 포함합니다  
E. Bronze 테이블은 스키마가 적용된 원시 데이터를 포함합니다  

---

## NO.60
조직이 ACID 트랜잭션 및 스키마 적용을 지원하는 최적화된 스토리지 레이어를 찾고 있습니다. 어떤 기술을 사용해야 합니까?

A. Delta Lake  
B. Unity Catalog  
C. Cloud File Storage  
D. Data lake  

---

## NO.61
특정 사용 사례에 특화된 사일로화된 데이터 아키텍처를 단순화하고 통합하는 데 사용할 수 있는 것은 무엇입니까?

A. Delta Lake  
B. Data lake  
C. Data warehouse  
D. Data lakehouse  

---

## NO.62
데이터 엔지니어가 매일 밤 실행되는 여러 태스크가 있는 Job이 있습니다. 각 태스크는 클러스터 시작에 오랜 시간이 걸려 느리게 실행됩니다. Job에 사용되는 클러스터의 시작 시간을 개선하기 위해 데이터 엔지니어가 수행할 수 있는 조치는 무엇입니까?

A. Databricks SQL에서 사용 가능한 엔드포인트를 사용할 수 있습니다  
B. All-purpose 클러스터 대신 Jobs 클러스터를 사용할 수 있습니다  
C. 클러스터를 단일 노드로 구성할 수 있습니다  
D. 클러스터 풀의 클러스터를 사용할 수 있습니다  
E. 더 큰 데이터 크기에 대해 클러스터를 자동 확장하도록 구성할 수 있습니다  

---

## NO.63
데이터 엔지니어가 공유 클러스터를 사용하여 영업팀이 생성한 뷰에 액세스해야 합니다. 카탈로그 및 스키마에 대한 사용 권한이 제공되었습니다. 영업팀이 생성한 뷰에 액세스하기 위해 추가로 필요한 최소 권한은 무엇입니까?

A. VIEW 및 기본 TABLE에 대한 SELECT 권한이 필요합니다  
B. VIEW에 대한 SELECT 권한만 필요합니다  
C. VIEW에 대한 ALL PRIVILEGES가 필요합니다  
D. SCHEMA 레벨에서 ALL PRIVILEGES가 필요합니다  

---

## NO.64
데이터 엔지니어가 메모리 사용량을 줄이고 성능을 개선하기 위해 Delta 테이블에서 열의 하위 집합만 읽으려고 합니다. 어떤 Spark DataFrame 작업을 사용해야 합니까?

A. select  
B. filter  
C. groupBy  
D. orderBy  

---

## NO.65
다음 중 Spark SQL의 배열 함수가 제공하는 이점은 무엇입니까?

A. 다양한 유형의 데이터를 한 번에 작업할 수 있는 능력  
B. 특정 파티션 및 윈도우 내의 데이터를 작업할 수 있는 능력  
C. 지정된 간격의 시간 관련 데이터를 작업할 수 있는 능력  
D. JSON 파일에서 수집된 복잡하고 중첩된 데이터를 작업할 수 있는 능력  
E. 절차적 자동화를 위한 테이블 배열을 작업할 수 있는 능력  

---

## NO.66
데이터 엔지니어가 Python 변수 day_of_week이 1이고 Python 변수 review_period가 True인 경우에만 Python 프로그램의 마지막 블록을 실행하려고 합니다. 이 조건부 실행 코드 블록을 시작하기 위해 어떤 제어 흐름 문을 사용해야 합니까?

A. `if day_of_week = 1 and review_period:`  
B. `if day_of_week = 1 and review_period = "True":`  
C. `if day_of_week == 1 and review_period == "True":`  
D. `if day_of_week == 1 and review_period:`  
E. `if day_of_week = 1 & review_period: = "True":`  

---

## NO.67
데이터 엔지니어링 팀이 클라우드 스토리지에서 데이터를 로드하는 Python 노트북을 생성했으며, 이 작업은 테스트가 완료되었고 이제 프로덕션에서 예약해야 합니다. 이 경우 사용하기 가장 좋은 클러스터는 무엇입니까?

A. All purpose cluster  
B. Unity Catalog가 활성화된 모든 클러스터  
C. Jobs Cluster  
D. Serverless SQL warehouse  

---

## NO.68
Structured Streaming이 처리의 정확한 진행 상황을 안정적으로 추적하여 재시작 및/또는 재처리를 통해 모든 종류의 실패를 처리할 수 있도록, 각 트리거에서 처리되는 데이터의 오프셋 범위를 기록하기 위해 Spark에서 사용하는 두 가지 접근 방식은 무엇입니까?

A. Checkpointing과 Write-ahead Logs  
B. Structured Streaming은 각 트리거에서 처리되는 데이터의 오프셋 범위를 기록할 수 없습니다  
C. Replayable Sources와 Idempotent Sinks  
D. Write-ahead Logs와 Idempotent Sinks  
E. Checkpointing과 Idempotent Sinks  

---

## NO.69
데이터 엔지니어가 세션 중 데이터셋이 변경되지 않는데도 Spark 작업이 대규모 Delta 테이블을 반복적으로 스캔하는 것을 발견합니다. 반복 쿼리 속도를 높이기 위해 데이터셋을 메모리에 저장할 수 있는 기술은 무엇입니까?

A. VACUUM  
B. CACHE TABLE  
C. OPTIMIZE  
D. MERGE  

---

## NO.70
조직이 Databricks에서 데이터 파이프라인을 구현했으며, 수동 클러스터 관리 없이 변동하는 워크로드에 기반하여 자동으로 확장할 수 있도록 해야 합니다. 목표는 높은 가용성과 최소 다운타임을 요구하는 회사의 SLA를 충족하는 것이며, Databricks가 자동으로 리소스 할당 및 최적화를 처리합니다. 이러한 요구사항을 충족하는 접근 방식은 무엇입니까?

A. 자동 확장 없이 특정 태스크에 전용인 고정 구성의 Job 클러스터를 배포합니다  
B. Spot 인스턴스를 사용하여 비용을 최소화하면서 리소스를 동적으로 할당하되, 중단 가능성이 있습니다  
C. Databricks에서 Interactive 클러스터를 사용하여 워크로드 요구에 따라 클러스터 크기를 수동으로 조정합니다  
D. 최소한의 수동 개입으로 자동으로 리소스를 확장하고 프로비저닝하는 Databricks의 Serverless 컴퓨팅을 사용합니다  

---

## NO.71
데이터 엔지니어가 Spark DataFrame 변환 파이프라인을 생성하고 있습니다. 파이프라인은 Delta 테이블에 결과를 쓰기 전에 filter, select, join 작업과 같은 여러 변환으로 구성됩니다. 이러한 변환을 실행 전에 최적화할 수 있게 하는 Spark 특성은 무엇입니까?

A. Lazy evaluation  
B. Parallel processing  
C. Checkpointing  
D. Broadcasting  

---

## NO.72
데이터 엔지니어가 manufacturing-team이라는 그룹에 액세스를 제공해야 합니다. 팀은 quality 스키마에서 테이블을 생성할 권한이 필요합니다. manufacturing이라는 상위 카탈로그에서 manufacturing.quality 스키마에 테이블을 생성할 수 있도록 manufacturing-team 그룹에 최소 권한을 부여하는 SQL 명령 집합은 무엇입니까?

A. GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;  
B. GRANT USE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;  
C. GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE CATALOG ON CATALOG manufacturing TO manufacturing-team;  
D. GRANT CREATE TABLE ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT CREATE SCHEMA ON SCHEMA manufacturing.quality TO manufacturing-team; GRANT USE CATALOG ON CATALOG manufacturing TO manufacturing-team;  

---

## NO.73
다음 중 중복 레코드 작성을 방지하면서 Delta 테이블에 데이터를 쓰는 데 사용할 수 있는 명령은 무엇입니까?

A. DROP  
B. IGNORE  
C. MERGE  
D. APPEND  
E. INSERT  

---

## NO.74
다음 중 테이블을 생성하는 데 사용되는 DDL(Data Definition Language) 작업을 올바르게 보여주는 SQL 코드 스니펫은 무엇입니까?

A. `CREATE TABLE employees (id INT, name STRING);`  
B. `DROP TABLE employees;`  
C. `ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);`  
D. `INSERT INTO employees (id, name) VALUES (1 'Alice');`  

---

## NO.75
데이터 엔지니어가 매일 밤 실행되고 여러 노트북을 순서대로 실행하는 재현 가능한 ETL 워크플로를 만들고자 합니다. 워크플로는 실패한 태스크를 재시도하고 모니터링 기능을 제공해야 합니다. 이 요구사항에 가장 적합한 Databricks 기능은 무엇입니까?

A. Databricks Jobs  
B. DBFS  
C. Delta Lake  
D. MLflow  

---

## NO.76
워크스페이스에서 사용되는 데이터 소스와 테이블을 확인하는 데 사용할 수 있는 Databricks 기능은 무엇입니까?

A. 리니지 기능을 사용하여 노트북, 다른 테이블, 보고서에서 테이블이 사용되는 곳을 포함한 모든 의존성을 보여주는 그래프를 시각화합니다  
B. 리니지 기능을 사용하여 보고서에서만 테이블이 사용되는 곳을 강조하는 그래프를 시각화합니다  
C. 감사 로그 기능을 사용하여 데이터 객체 간의 의존성을 시각화하는 대신 테이블을 쿼리하거나 수정한 사용자와 같은 사용자 활동을 검토합니다  
D. 리니지 기능을 사용하여 노트북에서만 테이블이 사용되는 곳을 강조하는 그래프를 시각화합니다  

---

## NO.77
Delta Live Table 파이프라인에 STREAMING LIVE TABLE을 사용하여 정의된 두 개의 데이터셋이 포함되어 있습니다. 세 개의 데이터셋은 LIVE TABLE을 사용하여 Delta Lake 테이블 소스에 대해 정의되어 있습니다. 테이블은 Continuous Pipeline Mode를 사용하여 Production 모드로 실행되도록 구성되어 있습니다. 이전에 처리되지 않은 데이터가 존재하고 모든 정의가 유효하다고 가정할 때, Start를 클릭하여 파이프라인을 업데이트한 후 예상되는 결과는 무엇입니까?

A. 파이프라인이 종료될 때까지 모든 데이터셋이 정해진 간격으로 업데이트됩니다. 추가 테스트를 허용하기 위해 컴퓨팅 리소스가 유지됩니다  
B. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 처리 없이 유지됩니다. 컴퓨팅 리소스가 유지되지만 사용되지 않습니다  
C. 파이프라인이 종료될 때까지 모든 데이터셋이 정해진 간격으로 업데이트됩니다. 업데이트를 위해 컴퓨팅 리소스가 배포되고 파이프라인이 중지되면 종료됩니다  
D. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 종료됩니다. 컴퓨팅 리소스가 종료됩니다  
E. 모든 데이터셋이 한 번 업데이트되고 파이프라인이 종료됩니다. 추가 테스트를 허용하기 위해 컴퓨팅 리소스가 유지됩니다  

---

## NO.78
Databricks 워크플로가 노트북의 오류로 인해 마지막 단계에서 실패합니다. 이 워크플로는 매일 실행됩니다. 데이터 엔지니어가 실수를 수정하고 파이프라인을 다시 실행하려고 합니다. 이 워크플로는 실행 비용이 많이 들고 시간이 많이 걸립니다. 다운타임과 비용을 최소화하기 위해 데이터 엔지니어가 해야 할 조치는 무엇입니까?

A. 전체 워크플로를 다시 실행합니다  
B. 실행을 복구합니다  
C. 클러스터를 다시 시작합니다  
D. 다른 클러스터로 전환합니다  

---

## NO.79
데이터 엔지니어가 데이터 파이프라인의 일부로 Delta 테이블을 사용해야 하지만 적절한 권한이 있는지 모릅니다. 테이블에 대한 권한을 검토할 수 있는 위치는 다음 중 어디입니까?

A. Databricks Filesystem  
B. Jobs  
C. Dashboards  
D. Repos  
E. Data Explorer  

---

## NO.80
데이터 엔지니어 팀이 Databricks에서 새로운 데이터 플랫폼을 구현하기로 결정했으며 현재 각 데이터 레이어에 각 종류의 데이터를 어떻게 저장할지 결정하고 있습니다. 메달리온 아키텍처에 적합한 레이어와 데이터 쌍은 무엇입니까?

A. Silver 레이어 - 예금 계좌 신청의 원시 데이터  
B. Bronze 레이어 - 각 국가 및 도시별 현금 예금 금액 요약  
C. Silver 레이어 - 정리된 마스터 고객 데이터  
D. Gold 레이어 - 중복 제거된 송금 거래  

---

## NO.81
다음 중 Gold 테이블과 Silver 테이블 간의 관계를 설명하는 것은 무엇입니까?

A. Gold 테이블은 Silver 테이블보다 집계를 더 많이 포함할 가능성이 높습니다  
B. Gold 테이블은 Silver 테이블보다 가치 있는 데이터를 더 많이 포함할 가능성이 높습니다  
C. Gold 테이블은 Silver 테이블보다 덜 정제된 데이터 보기를 포함할 가능성이 높습니다  
D. Gold 테이블은 Silver 테이블보다 더 많은 데이터를 포함할 가능성이 높습니다  
E. Gold 테이블은 Silver 테이블보다 더 진실된 데이터를 포함할 가능성이 높습니다  

---

## NO.82
조직이 Databricks Unity Catalog에 저장된 데이터셋을 Databricks가 아닌 다른 데이터 플랫폼을 사용하는 외부 파트너와 공유해야 합니다. 목표는 데이터 보안을 유지하고 파트너가 데이터에 효율적으로 액세스할 수 있도록 하는 것입니다. 외부 파트너와 데이터셋을 안전하게 공유하기 위해 데이터 엔지니어가 사용해야 할 방법은 무엇입니까?

A. 개방형 공유 프로토콜을 사용한 Delta Sharing  
B. CSV 파일로 데이터를 내보내고 이메일로 전송  
C. 타사 API를 사용하여 Delta 테이블 액세스  
D. Databricks-to-Databricks 공유  

---

## NO.83
데이터 엔지니어가 전자상거래 거래 Delta 테이블에서 성능 병목 현상에 직면하고 있습니다. 테이블은 관리되는 Unity Catalog 테이블이며 데이터 레이아웃 체계에서 파티셔닝과 Z-ordering을 사용합니다. Unity Catalog 테이블에 대한 예측 최적화도 활성화되어 있습니다. 테이블에는 자주 변경되는 쿼리 필터가 있으며, 데이터 엔지니어는 데이터 레이아웃이나 예측 최적화의 이점을 관찰하지 못합니다. 데이터 레이아웃 병목 현상을 어떻게 수정해야 합니까?

A. Liquid Clustering으로 데이터 레이아웃을 다시 작성하고 Z-Ordered 열로 클러스터링합니다  
B. 쿼리 결과를 캐시를 통해 읽을 수 있도록 Delta Caching을 활성화합니다  
C. Z-Order 열을 조정하고 OPTIMIZE를 수동으로 실행합니다  
D. Partition+Z-Ordering에서 Automatic Liquid Clustering으로 데이터 레이아웃을 전환합니다  

---

## NO.84
random_values 테이블에 다음 데이터가 있습니다:  
col1: 0, 1, 2, NULL, 2, 3  
다음 쿼리의 출력은 무엇입니까?  
`select count_if(col1 > 1) as count_a, count(*) as count_b, count(col1) as count_c from random_values`

A. 3 6 5  
B. 4 6 5  
C. 3 6 6  
D. 4 6 6  

---

## NO.85
데이터 엔지니어가 Databricks의 Spark DataFrame에 클라우드 객체 스토리지의 파일을 읽어야 합니다. 파일은 헤더와 쉼표 구분자가 있는 CSV 형식으로 저장되어 있습니다. 첫 번째 행에서 열 이름을 올바르게 추론하는 Spark DataFrame 리더 옵션은 무엇입니까?

A. inferSchema  
B. header  
C. delimiter  
D. mode  

---

## NO.86
다음 중 Databricks Repos 외부에서 수행해야 하는 Git 작업은 무엇입니까?

A. Commit  
B. Pull  
C. Push  
D. Clone  
E. Merge  

---

## NO.87
데이터 엔지니어가 컴포저블 테이블에서 읽기 위한 배치 수집 파이프라인의 일부로 다음 코드 블록을 사용하고 있습니다:  
`transactions_df = (spark.read.schema(schema).format("delta").table("transactions"))`  
transactions 테이블이 스트림 소스일 때 이 코드 블록이 작동하도록 하려면 어떤 변경이 필요합니까?

A. predict를 스트림 호환 예측 함수로 교체합니다  
B. schema(schema)를 option("maxFilesPerTrigger", 1)으로 교체합니다  
C. "transactions"를 Delta 테이블 위치의 경로로 교체합니다  
D. format("delta")를 format("stream")으로 교체합니다  
E. spark.read를 spark.readStream으로 교체합니다  

---

## NO.88
데이터 엔지니어가 Databricks 노트북을 사용하여 데이터 파이프라인을 구현하고 있습니다. 작업 내 여러 태스크에 걸쳐 파일 경로 및 처리 날짜와 같은 매개변수를 공유하려고 합니다. 매개변수 전달을 가능하게 하는 Databricks 유틸리티는 무엇입니까?

A. dbutils.widgets  
B. dbutils.fs  
C. spark.conf  
D. display  

---

## NO.89
데이터 엔지니어가 두 테이블에서 데이터 엔터티를 만들려고 합니다. 데이터 엔터티는 다른 세션의 다른 데이터 엔지니어가 사용할 수 있어야 합니다. 또한 물리적 위치에 저장되어야 합니다. 데이터 엔지니어가 만들어야 할 데이터 엔터티는 다음 중 무엇입니까?

A. Database  
B. Function  
C. View  
D. Temporary view  
E. Table  

---

## NO.90
데이터 엔지니어가 Delta 테이블에 Databricks OPTIMIZE 명령을 사용하고 있습니다. 동일한 데이터로 동일한 테이블에 OPTIMIZE를 두 번 실행하면 어떻게 됩니까?

A. 멱등성이므로 효과가 없습니다  
B. 파일당 튜플 수를 크게 변경합니다  
C. 데이터를 재클러스터링하여 파일 크기를 더 줄입니다  
D. 전체 Liquid Clustering 프로세스를 트리거합니다  

---

## NO.91
데이터 엔지니어가 테이블에서 읽고, 데이터를 조작한 다음, 새 테이블에 스트리밍 쓰기를 수행하도록 Structured Streaming 작업을 구성했습니다. 데이터 엔지니어가 쿼리가 5초마다 데이터를 처리하는 마이크로 배치를 실행하도록만 하려면 빈칸을 채우기 위해 어떤 코드 줄을 사용해야 합니까?

A. trigger("5 seconds")  
B. trigger()  
C. trigger(once="5 seconds")  
D. trigger(processingTime="5 seconds")  
E. trigger(continuous="5 seconds")  

---

## NO.92
데이터 엔지니어가 Databricks 노트북에서 주어진 배지에서 박테리아 개체수를 계산하는 함수를 작성했습니다. 분석가들이 노트북에서 이 함수를 사용하며 때때로 잘못된 데이터 유형의 입력 인수를 제공하여 실행 중 오류가 발생할 수 있습니다. 잘못된 데이터 유형이 입력으로 제공되었는지 빠르게 식별하는 데 도움이 되는 Databricks 기능은 무엇입니까?

A. Spark 사용자 인터페이스에는 이 세션에서 사용된 변수를 포함하는 디버그 탭이 있습니다  
B. Databricks 디버거는 잘못된 데이터 유형이 제출되면 오류를 발생시키는 중단점을 설정할 수 있습니다  
C. Databricks 디버거는 변수 값을 한눈에 볼 수 있는 변수 탐색기를 사용할 수 있습니다  
D. 데이터 엔지니어는 변수가 무엇인지 알아내기 위해 print 문을 추가해야 합니다  

---

## NO.93
Unity Catalog가 활성화된 Databricks를 사용하는 회사의 데이터 엔지니어가 Unity Catalog가 활성화된 Databricks 워크스페이스를 사용하는 외부 파트너와 테이블 컬렉션을 공유해야 합니다. Delta Sharing을 설정하기 위해 외부 파트너에게 먼저 요청해야 하는 정보는 무엇입니까?

A. Databricks 워크스페이스의 IP 주소  
B. Databricks 클러스터의 이름  
C. Unity Catalog 메타스토어의 공유 식별자  
D. Databricks 계정 비밀번호  

---

## NO.94
데이터 엔지니어가 Databricks 계정에 연결된 GitHub 리포지토리로 ETL 파이프라인 코드를 유지 관리하고 있습니다. ETL 파이프라인을 Databricks 워크플로로 프로덕션에 배포하려고 합니다. 어떤 접근 방식을 사용해야 합니까?

A. Databricks Asset Bundles(DAB) + GitHub 통합  
B. workflow_config.json을 유지 관리하고 Databricks CLI를 사용하여 배포  
C. workflow_config.json을 유지 관리하고 Terraform을 사용하여 배포  
D. UI에서 수동으로 워크플로를 생성하고 관리  

---

## NO.95
Asset Bundle의 구조는 무엇입니까?

A. 런타임 환경과 자산의 소스 코드를 포함하는 Docker 이미지  
B. 동반 메타데이터 없이 워크스페이스 자산만 포함하는 압축 아카이브(ZIP)  
C. 새 워크스페이스로 마이그레이션할 자산의 이름을 열거하는 단일 일반 텍스트 파일  
D. 프로젝트의 아티팩트, 리소스 및 구성을 지정하는 YAML 구성 파일  

---

## NO.96
데이터 엔지니어가 파트너 조직을 Databricks 계정에 적응시키고 있습니다. 두 팀은 일부 비즈니스 사용 사례를 공유합니다. Unity Catalog로 관리되는 Delta 테이블과 해당 테이블을 생성하는 노트북 작업을 파트너 조직과 공유해야 합니다. 데이터 엔지니어가 필요한 정보를 원활하게 공유하려면 어떻게 해야 합니까?

A. 모든 코드를 압축하여 이메일로 공유하고 데이터 레이크에서 데이터 수집을 허용합니다  
B. Delta Sharing을 통해 필요한 데이터셋과 노트북을 공유합니다. Unity Catalog를 통해 권한을 관리합니다  
C. Unity Catalog를 사용하여 간단히 데이터와 노트북을 공유할 수 있습니다  
D. Github를 통해 코드베이스에 대한 액세스를 공유하고 데이터 레이크에서 데이터셋을 수집할 수 있도록 합니다  

---

## NO.97
데이터 엔지니어와 데이터 분석가가 데이터 파이프라인에서 함께 작업하고 있습니다. 데이터 엔지니어는 Python을 사용하여 파이프라인의 raw, bronze, silver 레이어를 담당하고, 데이터 분석가는 SQL을 사용하여 gold 레이어를 담당합니다. 파이프라인의 원시 소스는 스트리밍 입력입니다. 이제 파이프라인을 Delta Live Tables로 마이그레이션하려고 합니다. Delta Live Tables로 마이그레이션할 때 파이프라인에 어떤 변경이 필요합니까?

A. 이러한 변경 중 어느 것도 필요하지 않습니다  
B. 파이프라인이 메달리온 기반 멀티홉 아키텍처 사용을 중단해야 합니다  
C. 파이프라인 전체가 SQL로 작성되어야 합니다  
D. 파이프라인이 스트리밍 소스 대신 배치 소스를 사용해야 합니다  
E. 파이프라인 전체가 Python으로 작성되어야 합니다  

---

## NO.98
다음 중 데이터 엔지니어가 단일 노드 클러스터를 사용하고자 하는 시나리오는 무엇입니까?

A. 소량의 데이터로 대화식으로 작업할 때  
B. 가능한 한 빨리 새로 고쳐야 하는 자동화된 보고서를 실행할 때  
C. Databricks SQL 내에서 SQL을 사용할 때  
D. 더 큰 데이터로 자동 확장하는 능력이 우려될 때  
E. 대량의 데이터로 보고서를 수동으로 실행할 때  

---

## NO.99
Silver 테이블과 Bronze 테이블 간의 관계에 대해 항상 참인 설명은 다음 중 무엇입니까?

A. Silver 테이블은 Bronze 데이터보다 덜 정제되고 덜 깨끗한 데이터 보기를 포함합니다  
B. Silver 테이블은 집계를 포함하고 Bronze 데이터는 비집계입니다  
C. Silver 테이블은 Bronze 테이블보다 더 많은 데이터를 포함합니다  
D. Silver 테이블은 Bronze 테이블보다 더 정제되고 깨끗한 데이터 보기를 포함합니다  
E. Silver 테이블은 Bronze 테이블보다 적은 데이터를 포함합니다  

---

## NO.100
데이터 엔지니어가 Databricks에서 클러스터를 구성하고 있으며 여러 Spark 실행기가 워커 노드에서 동시에 태스크를 실행할 수 있도록 하려고 합니다. 태스크를 실행하는 것을 담당하는 클러스터 구성 요소는 무엇입니까?

A. Driver  
B. Executor  
C. Notebook  
D. Job scheduler  

---

## NO.101
데이터 엔지니어가 Delta 형식으로 저장된 데이터를 처리하는 Spark 작업을 실행하고 있습니다. 엔지니어는 쿼리 성능을 개선하기 위해 작은 파일을 더 큰 파일로 압축하여 파일 수를 줄이려고 합니다. 이 작업을 수행하는 Delta Lake 명령은 무엇입니까?

A. VACUUM  
B. OPTIMIZE  
C. MERGE  
D. DELETE  

---

## NO.102
데이터 엔지니어링 프로젝트는 ETL을 사용하여 대규모 데이터 배치를 일일 일정으로 처리합니다. 작업은 리소스 집약적이고 크기가 다양하며, 워크로드에 따라 자동으로 확장할 수 있는 확장 가능하고 비용 효율적인 컴퓨팅 솔루션이 필요합니다. 설명된 요구사항을 충족하는 컴퓨팅 접근 방식은 무엇입니까?

A. Job Cluster  
B. Dedicated Cluster  
C. All-Purpose Cluster  
D. Databricks SQL Serverless  

---

## NO.103
데이터 엔지니어가 다른 접미사를 가진 파일이 포함된 디렉토리에서 png 파일만 파싱해야 합니다. 이 작업을 달성하기 위해 어떤 코드를 사용해야 합니까?

A. `spark.readStream.format("cloudFiles").option("cloudFiles.format", "binaryFile").append("/*.png")`  
B. `spark.readStream.format("cloudFiles").option("cloudFiles.format", "binaryFile").option("pathGlobfilter", "*.png").load(<base-path>)`  
C. `spark.readStream.format("cloudFiles").option("cloudFiles.format", "binaryFile").option("pathGlobfilter", "*.png").append()`  
D. `spark.readstream.format("cloudFiles").option("cloudFiles.format", "binaryFile").load("/*.png")`  

---

## NO.104
Delta Lake를 사용하여 전자건강기록(EHR)을 저장하는 의료 제공 조직에서 데이터 분석가가 최근 데이터 수정이 적용되기 전 2주 전의 patient_records 테이블 스냅샷을 분석해야 합니다. 분석가가 해당 특정 이전 버전을 쿼리할 수 있도록 데이터 엔지니어가 취해야 할 접근 방식은 무엇입니까?

A. 테이블을 잘라서 모든 데이터를 제거한 다음, 분석가가 쿼리할 수 있도록 2주 전의 데이터를 잘린 테이블에 다시 로드합니다  
B. Delta 트랜잭션 로그에서 2주 전에 해당하는 버전 번호를 식별하고, 분석가에게 VERSION AS OF 구문을 사용하여 쿼리하도록 해당 버전 번호를 공유하거나, 해당 버전을 새 Delta 테이블로 내보냅니다  
C. RESTORE 명령을 사용하여 테이블을 2주 전 버전으로 복원하고, 분석가가 복원된 테이블을 쿼리하도록 합니다  
D. VACUUM 명령을 사용하여 2주보다 오래된 테이블의 모든 버전을 제거한 다음, 분석가가 남아있는 버전을 쿼리할 수 있도록 합니다  

---

## NO.105
스트리밍 파이프라인이 IoT 센서 데이터를 읽고 집계된 결과를 Delta 테이블에 씁니다. 엔지니어는 특정 시간 창 내의 늦게 도착하는 레코드가 올바르게 처리되도록 하려고 합니다. 어떤 Structured Streaming 기능을 사용해야 합니까?

A. Watermarking  
B. Partitioning  
C. Caching  
D. Broadcast join  

---

## NO.106
Delta Live Tables를 사용하여 정의된 데이터셋에 다음 기대 절이 포함되어 있습니다:  
`CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW`  
이러한 제약 조건을 위반하는 데이터가 포함된 배치가 처리될 때 예상되는 동작은 무엇입니까?

A. 기대를 위반하는 레코드는 대상 데이터셋에서 삭제되고 격리 테이블에 로드됩니다  
B. 기대를 위반하는 레코드는 대상 데이터셋에 추가되고 대상 데이터셋에 추가된 필드에서 유효하지 않은 것으로 표시됩니다  
C. 기대를 위반하는 레코드는 대상 데이터셋에서 삭제되고 이벤트 로그에 유효하지 않은 것으로 기록됩니다  
D. 기대를 위반하는 레코드는 대상 데이터셋에 추가되고 이벤트 로그에 유효하지 않은 것으로 기록됩니다  
E. 기대를 위반하는 레코드는 작업을 실패하게 합니다  

---

## NO.107
데이터 엔지니어가 Spark SQL 테이블 my_table을 삭제하려고 합니다. 모든 테이블 메타데이터와 데이터를 삭제하고 싶습니다. 다음 명령을 실행합니다:  
`DROP TABLE IF EXISTS my_table`  
SHOW TABLES를 실행하면 객체가 더 이상 표시되지 않지만, 데이터 파일은 여전히 존재합니다. 데이터 파일이 여전히 존재하고 메타데이터 파일이 삭제된 이유는 무엇입니까?

A. 테이블의 데이터가 10GB보다 컸습니다  
B. 테이블의 데이터가 10GB보다 작았습니다  
C. 테이블이 외부 테이블이었습니다  
D. 테이블에 위치가 없었습니다  
E. 테이블이 관리 테이블이었습니다  

---

## NO.108
단일 Job이 두 개의 노트북을 두 개의 별도 태스크로 실행합니다. 데이터 엔지니어가 Job의 현재 실행에서 노트북 중 하나가 느리게 실행되는 것을 발견했습니다. 기술 리더에게 왜 그런지 식별하는 데 도움을 요청합니다. Job의 일부로 노트북이 느리게 실행되는 이유를 식별하기 위해 기술 리더가 사용할 수 있는 접근 방식은 무엇입니까?

A. Jobs UI의 Runs 탭으로 이동하여 처리 중인 노트북을 즉시 검토할 수 있습니다  
B. Jobs UI의 Tasks 탭으로 이동하고 활성 실행을 클릭하여 처리 중인 노트북을 검토할 수 있습니다  
C. Jobs UI의 Runs 탭으로 이동하고 활성 실행을 클릭하여 처리 중인 노트북을 검토할 수 있습니다  
D. Job 태스크가 느리게 실행되는 이유를 확인할 방법이 없습니다  
E. Jobs UI의 Tasks 탭으로 이동하여 처리 중인 노트북을 즉시 검토할 수 있습니다  

---

## NO.109
데이터 엔지니어가 데이터 파이프라인을 유지 관리하고 있습니다. 데이터 수집 시 소스 데이터의 품질 수준이 낮아지기 시작하는 것을 발견합니다. 데이터 엔지니어는 품질 수준 모니터링 프로세스를 자동화하고자 합니다. 이 문제를 해결하기 위해 사용할 수 있는 도구는 무엇입니까?

A. Unity Catalog  
B. Data Explorer  
C. Delta Lake  
D. Delta Live Tables  
E. Auto Loader  

---

## NO.110
SQL을 사용하여 Delta Live Tables(DLT) 테이블을 생성할 때 CREATE LIVE TABLE 구문 대신 CREATE STREAMING LIVE TABLE 구문을 사용해야 하는 경우는 언제입니까?

A. DLT 파이프라인의 후속 단계가 정적일 때  
B. 데이터를 증분적으로 처리해야 할 때  
C. DLT에 대해 중복이므로 사용할 필요가 없습니다  
D. 복잡한 집계를 통해 데이터를 처리해야 할 때  
E. DLT 파이프라인의 이전 단계가 정적일 때  

---

## NO.111
데이터 분석가가 전체 데이터 분석 팀이 사용하는 Delta 테이블 sales를 생성했습니다. 데이터 엔지니어링 팀에 데이터가 깨끗한지 확인하기 위한 일련의 테스트를 구현하는 데 도움을 요청합니다. 그러나 데이터 엔지니어링 팀은 SQL 대신 Python을 사용합니다. PySpark에서 sales에 액세스하기 위해 사용할 수 있는 명령은 무엇입니까?

A. SELECT * FROM sales  
B. PySpark와 SQL 간에 데이터를 공유할 방법이 없습니다  
C. spark.sql("sales")  
D. spark.delta.table("sales")  
E. spark.table("sales")  

---

## NO.112
데이터 엔지니어가 여러 변환에서 동일한 DataFrame에 반복적으로 액세스하는 Spark 작업을 실행하고 있습니다. 작업 간 중간 결과를 메모리에 저장하여 성능을 개선하려면 어떤 Spark 기술을 사용해야 합니까?

A. Partitioning  
B. Caching  
C. Broadcasting  
D. Checkpointing  

---

## NO.113
DB 플랫폼 아키텍처의 컨트롤 플레인에서 기능하는 두 가지 구성 요소는 무엇입니까? (2개 선택)

A. Virtual Machines  
B. Compute Orchestration  
C. Serverless Compute  
D. Compute  
E. Unity Catalog  

---

## NO.114
엔지니어링 관리자가 Databricks SQL 쿼리를 사용하여 각 데이터 소스의 수집 지연 시간을 모니터링합니다. 관리자는 매일 쿼리 결과를 확인하지만 매일 수동으로 쿼리를 다시 실행하고 결과를 기다리고 있습니다. 쿼리 결과가 매일 업데이트되도록 하기 위해 관리자가 사용할 수 있는 접근 방식은 무엇입니까?

A. Databricks SQL의 쿼리 페이지에서 쿼리가 1일마다 새로 고치도록 예약할 수 있습니다  
B. Databricks SQL의 SQL 엔드포인트 페이지에서 쿼리가 1일마다 새로 고치도록 예약할 수 있습니다  
C. Jobs UI에서 쿼리가 1일마다 실행되도록 예약할 수 있습니다  
D. Databricks SQL의 SQL 엔드포인트 페이지에서 쿼리가 12시간마다 새로 고치도록 예약할 수 있습니다  
E. Jobs UI에서 쿼리가 12시간마다 실행되도록 예약할 수 있습니다  

---

## NO.115
데이터 엔지니어가 클라우드 스토리지에서 새 데이터를 수집하는 스크립트를 작성하고 있습니다. 스키마 변경 시 수집이 실패해야 합니다. 다운스트림 소스의 변경 사항을 찾아 의도된 변경인지 확인할 때까지 실패해야 합니다. 요구사항을 충족하는 명령은 무엇입니까?

A. failOnNewColumns  
B. none  
C. rescue  
D. addNewColumns  

---

## NO.116
데이터 엔지니어가 기존 데이터를 보존하면서 기존 Delta 테이블에 새 레코드를 추가해야 합니다. 수집 파이프라인은 매시간 실행되며 이전 레코드를 대체하지 않고 증분 데이터를 추가합니다. 어떤 쓰기 모드를 사용해야 합니까?

A. overwrite  
B. append  
C. ignore  
D. errorIfExists  

---

## NO.117
다음 중 Delta Lake가 제공하는 Databricks Lakehouse Platform 사용의 이점은 무엇입니까?

A. 다양한 언어를 사용하여 동일한 데이터를 조작하는 능력  
B. 단일 노트북에서 실시간으로 협업하는 능력  
C. 쿼리 실패에 대한 알림을 설정하는 능력  
D. 배치 및 스트리밍 워크로드를 지원하는 능력  
E. 복잡한 데이터 작업을 분산하는 능력  

---

## NO.118
데이터 엔지니어가 타임스탬프, 사용자 정보, 작업 유형을 포함하여 Delta 테이블에 수행된 작업의 전체 기록을 확인해야 합니다. 이 감사 정보를 제공하는 SQL 명령은 무엇입니까?

A. SHOW TABLES  
B. DESCRIBE HISTORY  
C. DESCRIBE TABLE  
D. SHOW DATABASES  

---

## NO.119
데이터 엔지니어가 Databricks Asset Bundles를 채택하는 여러 팀에 대한 리포지토리 레이아웃을 표준화하고 있습니다. 리포지토리 루트에 번들 이름, 대상, 워크스페이스 설정, 권한, 리소스 매핑을 정의하는 단일 권위 있는 구성 파일을 보장하려고 합니다. 목표를 달성하기 위해 어떤 전략을 사용해야 합니까?

A. 각 하위 폴더 아래에 여러 databricks.yml 파일을 배치하고 배포 시 include 매핑을 사용하여 병합합니다  
B. 리포지토리 루트에 정확히 하나의 databricks.yml을 배치합니다; 이것이 주 구성 파일이며 include 매핑을 통해 추가 구성 파일을 참조할 수 있습니다  
C. 리포지토리 루트의 databricks/hidden 폴더에 databricks.yml을 배치합니다; 숨겨진 위치만 번들 구성에 유효합니다  
D. 리포지토리 루트에 databricks.yaml을, 하위 폴더에 선택적 databricks.yml을 배치합니다; CLI는 둘 다 있을 때 .yaml을 .yml보다 선호합니다  

---

## NO.120
데이터 엔지니어가 여러 소스의 스트리밍 및 배치 데이터를 모두 처리하는 ETL 파이프라인을 설계하고 있습니다. 파이프라인은 데이터 품질을 보장하고, 스키마 진화를 처리하고, 쉬운 유지 관리를 제공해야 합니다. 팀은 Databricks에서 Delta Live Tables(DLT)를 사용하는 것을 고려하고 있습니다. Delta Live Tables(DLT)가 적절한 선택인 이유는 무엇입니까?

A. 자동 데이터 품질 검사, 스키마 진화에 대한 내장 지원, 선언적 파이프라인 개발  
B. 수동 스키마 적용, 높은 운영 오버헤드, 제한된 확장성  
C. 데이터 품질 검사를 위한 사용자 정의 코드 필요, 스트리밍 데이터 미지원, 복잡한 파이프라인 유지 관리  
D. 배치 처리만 지원, 데이터 버전 관리 없음, 높은 인프라 비용  

---

## NO.121
다음 중 Databricks Lakehouse Platform이 오픈 소스 기술을 수용하는 이점은 무엇입니까?

A. 클라우드별 통합  
B. 단순화된 거버넌스  
C. 스토리지 확장 능력  
D. 워크로드 확장 능력  
E. 벤더 종속성 회피  

---

## NO.122
데이터 엔지니어가 워크스페이스 관리자로 만들지 않고 스키마 main.marketing에 대한 일상적인 권한 관리를 mkt-admins 그룹에 위임하려고 합니다. 해당 스키마 내의 객체에 대해 다른 사용자의 권한을 부여하고 취소할 수 있어야 합니다. UC의 소유권 및 권한 모델에 맞는 접근 방식은 무엇입니까?

A. 메타스토어에 대한 MANAGE 권한을 mkt-admins에 부여하여 모든 스키마와 테이블에 대한 권한을 전역적으로 관리할 수 있도록 합니다  
B. mkt-admins를 워크스페이스 레벨 관리자 그룹으로 만든 다음, main.marketing에 SELECT를 부여하여 권한 위임을 허용합니다  
C. 스키마 main.marketing의 소유권을 mkt-admins로 이전합니다; 소유자는 스키마 및 포함된 객체에 대한 권한을 관리할 수 있습니다  
D. main.marketing에 USE SCHEMA를 부여하고 모든 테이블에 MODIFY를 부여하여 스키마 내에서 권한 부여를 관리할 수 있도록 합니다  

---

## NO.123
데이터 엔지니어가 이전 팀으로부터 Databricks 파이프라인을 상속받았습니다. 파이프라인이 SLA를 놓치고 있으며 할당된 예산보다 비용이 더 많이 듭니다. 분석 결과 클러스터가 완전히 활용되지 않고 데이터셋이 편향되고 있는 것으로 나타났습니다. 이 문제를 어떻게 해결해야 합니까?

A. coalesce()를 사용하여 파티션을 병합하고 편향을 줄입니다  
B. 작업의 실행기 수를 늘립니다  
C. 모든 노드에 걸쳐 더 최적으로 분산되도록 데이터셋을 재파티셔닝합니다  
D. 작업의 실행기 메모리를 늘립니다  

---

## NO.124
다음 중 Delta 테이블의 스토리지 구성을 설명하는 것은 무엇입니까?

A. Delta 테이블은 데이터, 기록, 메타데이터 및 기타 속성을 포함하는 단일 파일에 저장됩니다  
B. Delta 테이블은 단일 파일에 데이터를 저장하고 별도 위치의 파일 컬렉션에 모든 메타데이터를 저장합니다  
C. Delta 테이블은 데이터, 기록, 메타데이터 및 기타 속성을 포함하는 파일 컬렉션에 저장됩니다  
D. Delta 테이블은 테이블 내에 저장된 데이터만 포함하는 파일 컬렉션에 저장됩니다  
E. Delta 테이블은 테이블 내에 저장된 데이터만 포함하는 단일 파일에 저장됩니다  

---

## NO.125
데이터 엔지니어가 쿼리가 필요한 만큼 많은 배치로 사용 가능한 모든 데이터를 처리하도록만 하려면 빈칸을 채우기 위해 어떤 코드 줄을 사용해야 합니까?

A. trigger(availableNow=True)  
B. trigger(processingTime="once")  
C. trigger(continuous="once")  
D. trigger(once=True)  

---

## NO.126
데이터 엔지니어가 수집된 스트리밍 테이블을 처리하고 있으며 원시 스트리밍 테이블 orders_raw에서 order_datetime 열의 NULL 값을 필터링하고 결과를 DLT를 사용하여 새 테이블 orders_valid에 저장해야 합니다. 어떤 코드 스니펫을 사용해야 합니까?

A. `CREATE OR REFRESH STREAMING TABLE orders_valid (CONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL) ON VIOLATION DROP ROW) AS SELECT * FROM STREAM orders_raw;`  
B. `CREATE OR REFRESH STREAMING TABLE orders_valid (CONSTRAINT valid_date EXPECT (order_datetime IS NOT NULL) ON VIOLATION DROP ROW) AS SELECT * FROM orders_raw;`  
C. `CREATE OR REFRESH STREAMING TABLE orders_valid AS SELECT * FROM STREAM(orders_raw) WHERE order_datetime IS NOT NULL;`  
D. `CREATE OR REPLACE STREAMING TABLE orders_valid (FILTER (order_datetime IS NOT NULL)) AS SELECT * FROM STREAM(orders_raw);`  

---

## NO.127
데이터 엔지니어에게 product 및 revenue 열이 있는 PySpark DataFrame df가 제공되었습니다. 각 제품의 총 수익, 평균 수익, 거래 수를 결정하기 위해 복잡한 집계를 계산해야 합니다. 어떤 코드 스니펫을 사용해야 합니까?

A. `from pyspark.sql import functions as F` → `df.groupBy("product").agg(F.sum("revenue").alias("total_revenue"), F.avg("revenue").alias("avg_revenue"), F.count("*").alias("transaction_count"))`  
B. `df.groupby("product").agg("sum(revenue)", "avg(revenue)", "count(revenue)")`  
C. `df.select("product", "revenue").groupBy("product").agg(F.sum("revenue"), F.mean("revenue"))`  
D. `df.groupBy("product").agg({"revenue": "sum", "revenue": "avg", "revenue": "count"})`  

---

## NO.128
데이터 엔지니어가 Delta 테이블과 관련된 데이터 파일이 매우 작다는 것을 인식했습니다. 성능을 개선하기 위해 작은 파일을 더 큰 파일로 압축하려고 합니다. 작은 파일을 압축하는 데 사용할 수 있는 키워드는 무엇입니까?

A. REDUCE  
B. OPTIMIZE  
C. COMPACTION  
D. REPARTITION  
E. VACUUM  

---

## NO.129
노트북이 실패하지 않도록 Job 클러스터가 지원하는 최대 출력은 얼마입니까?

A. 25MB  
B. 10MB  
C. 30MB  
D. 15MB  

---

## NO.130
데이터 엔지니어가 성능 병목 현상이 지속적으로 발생하는 PySpark 작업 기반 ETL 파이프라인을 검사하고 있습니다. 개발자 피드백에 기반하여 작업의 컴퓨팅 리소스가 부족하다고 가정합니다. 문제를 정확히 파악하기 위해 Spark UI를 관찰하고 작업의 CPU 시간 대 Task 시간이 높은 것을 발견합니다. 데이터 엔지니어가 취해야 할 조치는 무엇입니까?

A. 높은 CPU 시간 대 Task 시간은 활용도가 낮은 클러스터를 의미합니다. 클러스터 전체에 작업을 더 균등하게 분산시키기 위해 데이터를 재파티셔닝해야 할 수 있습니다  
B. 높은 CPU 시간 대 Task 시간은 클러스터의 효율적인 사용을 의미하며 변경이 필요하지 않습니다  
C. 높은 CPU 시간 대 Task 시간은 CPU가 과도하게 활용되는 작업을 의미합니다. 실행기 및 코어 튜닝 또는 클러스터 크기 조정을 고려해야 할 수 있습니다  
D. 높은 CPU 시간 대 Task 시간은 메모리가 과도하게 활용되고 병렬 처리를 늘려야 함을 의미합니다  

---

## NO.131
데이터 엔지니어가 Delta 테이블에 쓰기 전에 특정 열을 기반으로 데이터셋에서 중복 레코드가 제거되도록 하려고 합니다. 중복 행을 제거하는 Spark DataFrame 메서드는 무엇입니까?

A. dropDuplicates  
B. distinctBy  
C. removeDuplicates  
D. uniqueRows  

---

## NO.132
데이터 엔지니어가 다른 데이터셋의 매칭 키를 기반으로 Delta 테이블의 특정 행을 업데이트하려고 합니다. 작업은 단일 문에서 삽입 및 업데이트 로직을 모두 지원해야 합니다. 이 기능을 지원하는 Delta Lake 명령은 무엇입니까?

A. UPDATE  
B. INSERT INTO  
C. MERGE INTO  
D. DELETE  

---

## NO.133
Delta Live Tables를 사용하여 정의된 데이터셋에 다음 기대 절이 포함되어 있습니다:  
`CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE`  
이러한 제약 조건을 위반하는 데이터가 포함된 배치가 처리될 때 예상되는 동작은 무엇입니까?

A. 기대를 위반하는 레코드는 대상 데이터셋에서 삭제되고 이벤트 로그에 유효하지 않은 것으로 기록됩니다  
B. 기대를 위반하는 레코드는 작업을 실패하게 합니다  
C. 기대를 위반하는 레코드는 대상 데이터셋에서 삭제되고 격리 테이블에 로드됩니다  
D. 기대를 위반하는 레코드는 대상 데이터셋에 추가되고 이벤트 로그에 유효하지 않은 것으로 기록됩니다  
E. 기대를 위반하는 레코드는 대상 데이터셋에 추가되고 대상 데이터셋에 추가된 필드에서 유효하지 않은 것으로 표시됩니다  

---

## NO.134
데이터 엔지니어와 데이터 분석가가 데이터 파이프라인에서 함께 작업하고 있습니다. 데이터 엔지니어는 Python을 사용하여 파이프라인의 raw, bronze, silver 레이어를, 데이터 분석가는 SQL을 사용하여 gold 레이어를 담당합니다. 원시 소스는 스트리밍 입력입니다. Delta Live Tables로 마이그레이션할 때 어떤 변경이 필요합니까?

A. 파이프라인은 SQL 및 Python으로 다른 노트북 소스를 가질 수 있습니다  
B. 파이프라인 전체가 SQL로 작성되어야 합니다  
C. 파이프라인이 스트리밍 소스 대신 배치 소스를 사용해야 합니다  
D. 파이프라인 전체가 Python으로 작성되어야 합니다  

---

## NO.135
데이터 엔지니어가 회사의 사용자 정의 클라우드 네트워크 내 데이터베이스에 있는 데이터에 대해 탐색적 분석을 수행해야 합니다. SQL을 사용하고 있습니다. 많은 수의 쿼리를 빠르고 비용 효율적으로 처리할 수 있는 SQL Warehouse 유형은 무엇입니까?

A. Serverless compute for notebooks  
B. Pro SQL Warehouse  
C. Classic SQL Warehouse  
D. Serverless SQL Warehouse  

---

## NO.136
엔지니어링 관리자가 최근 프로젝트의 성능을 Databricks SQL 쿼리를 사용하여 모니터링하려고 합니다. 프로젝트 출시 후 첫 주 동안 쿼리 결과가 매분 업데이트되기를 원합니다. 그러나 첫 주 이후에 쿼리에 사용되는 컴퓨팅 리소스가 계속 실행되어 조직에 많은 비용이 들 것을 우려합니다. 프로젝트 출시 첫 주 이후에 쿼리가 조직에 비용이 들지 않도록 하기 위해 사용할 수 있는 접근 방식은 무엇입니까?

A. SQL 엔드포인트가 소비하는 DBU 수에 제한을 설정할 수 있습니다  
B. 특정 횟수의 새로 고침 후 종료되도록 쿼리의 새로 고침 일정을 설정할 수 있습니다  
C. 프로젝트 출시 첫 주 이후에 쿼리가 조직에 비용이 들지 않도록 할 수 없습니다  
D. 쿼리의 새로 고침 일정을 관리할 수 있는 개인의 수에 제한을 설정할 수 있습니다  
E. 쿼리 스케줄러에서 특정 날짜에 종료되도록 쿼리의 새로 고침 일정을 설정할 수 있습니다  

---

## NO.137
데이터 엔지니어가 매일 명령문을 실행하여 전날의 매출을 transactions 테이블에 복사합니다. 각 날의 매출은 "/transactions/raw" 위치에 자체 파일로 있습니다. 오늘 COPY INTO 명령을 실행한 후, transactions 테이블의 레코드 수가 변경되지 않았음을 알게 됩니다. 명령문이 새 레코드를 테이블에 복사하지 않았을 수 있는 이유는 무엇입니까?

A. 복사할 파일의 형식이 FORMAT_OPTIONS 키워드에 포함되지 않았습니다  
B. 복사할 파일의 이름이 FILES 키워드에 포함되지 않았습니다  
C. 전날의 파일이 이미 테이블에 복사되었습니다  
D. PARQUET 파일 형식은 COPY INTO를 지원하지 않습니다  
E. COPY INTO 문은 복사된 행을 보기 위해 테이블을 새로 고쳐야 합니다  

---

## NO.138
데이터 엔지니어가 Delta 테이블에 데이터셋을 로드하고 있지만 새 열이 추가됨에 따라 시간이 지남에 따라 스키마가 진화할 것으로 예상합니다. 파이프라인은 수집 작업을 실패시키지 않고 새 필드를 자동으로 처리해야 합니다. 쓰기 작업 중 엔지니어가 활성화해야 하는 Delta Lake 옵션은 무엇입니까?

A. overwriteSchema  
B. mergeSchema  
C. optimizeWrite  
D. autoCompact  

---

## NO.139
데이터 엔지니어링 팀에 두 개의 테이블이 있습니다. 첫 번째 테이블 march_transactions는 3월의 모든 소매 거래 컬렉션입니다. 두 번째 테이블 april_transactions는 4월의 모든 소매 거래 컬렉션입니다. 테이블 간에 중복 레코드가 없습니다. 중복 레코드 없이 march_transactions와 april_transactions의 모든 레코드를 포함하는 새 테이블 all_transactions를 생성하기 위해 실행해야 하는 명령은 무엇입니까?

A. `CREATE TABLE all_transactions AS SELECT * FROM march_transactions INNER JOIN SELECT * FROM april_transactions;`  
B. `CREATE TABLE all_transactions AS SELECT * FROM march_transactions UNION SELECT * FROM april_transactions;`  
C. `CREATE TABLE all_transactions AS SELECT * FROM march_transactions OUTER JOIN SELECT * FROM april_transactions;`  
D. `CREATE TABLE all_transactions AS SELECT * FROM march_transactions INTERSECT SELECT * FROM april_transactions;`  
E. `CREATE TABLE all_transactions AS SELECT * FROM march_transactions MERGE SELECT * FROM april_transactions;`  

---

## NO.140
데이터 엔지니어가 테이블 stores의 문자열 열 city에 사용자 정의 로직을 적용해야 합니다. 이 사용자 정의 로직을 대규모로 적용하기 위해 SQL 사용자 정의 함수(UDF)를 만들려고 합니다. 이 SQL UDF를 생성하는 코드 블록은 무엇입니까?

A. `CREATE FUNCTION combine_nyc(city STRING) RETURNS STRING RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;`  
B. `CREATE UDF combine_nyc(city STRING) RETURNS STRING CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;`  
C. `CREATE UDF combine_nyc(city STRING) RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;`  
D. `CREATE FUNCTION combine_nyc(city STRING) RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;`  
E. `CREATE UDF combine_nyc(city STRING) RETURNS STRING RETURN CASE WHEN city = "brooklyn" THEN "new york" ELSE city END;`  

---

## NO.141
데이터 엔지니어가 Unity Catalog에서 액세스 제어를 설정하고 있으며 데이터 분석가 그룹이 테이블을 쿼리할 수 있지만 데이터를 수정할 수 없도록 해야 합니다. 데이터 분석가에게 부여해야 할 권한은 무엇입니까?

A. ALL PRIVILEGES  
B. MODIFY  
C. SELECT  
D. INSERT  

---

## NO.142
새로운 데이터 엔지니어링 팀이 ELT 프로젝트에 배정되었습니다. 새 팀은 프로젝트를 완전히 관리하기 위해 테이블 sales에 대한 전체 권한이 필요합니다. 새 데이터 엔지니어링 팀에 데이터베이스에 대한 전체 권한을 부여하는 데 사용할 수 있는 명령은 무엇입니까?

A. GRANT ALL PRIVILEGES ON TABLE sales TO team;  
B. GRANT SELECT CREATE MODIFY ON TABLE sales TO team;  
C. GRANT SELECT ON TABLE sales TO team;  
D. GRANT USAGE ON TABLE sales TO team;  
E. GRANT ALL PRIVILEGES ON TABLE team TO sales;  

---

## NO.143
데이터 엔지니어가 리전별로 판매 데이터를 그룹화하고 각 리전의 총 수익을 계산하는 Spark 코드를 작성하고 있습니다. 그룹화 작업을 수행하는 Spark DataFrame 변환은 무엇입니까?

A. groupBy  
B. filter  
C. select  
D. orderBy  

---

## NO.144
데이터 엔지니어가 데이터 품질 문제를 디버깅하기 위해 Delta 테이블의 과거 버전을 분석하려고 합니다. 2일 전에 존재했던 테이블을 쿼리해야 합니다. 테이블의 이전 스냅샷을 쿼리할 수 있는 Delta Lake 기능은 무엇입니까?

A. OPTIMIZE  
B. Time Travel  
C. VACUUM  
D. Z-Ordering  

---

## NO.145
데이터 엔지니어가 데이터 처리 파이프라인에 대해 최소한의 런타임 오류와 높은 가용성을 요구하는 엄격한 SLA를 충족해야 하는 조직에서 일하고 있습니다. 클러스터를 관리하고 튜닝하는 운영 오버헤드를 피하고 싶습니다. 요구사항을 충족하는 아키텍처 솔루션은 무엇입니까?

A. 사용자가 구성하고 모니터링하는 자동 확장 클러스터를 사용합니다  
B. 사용자 정의 클라우드 VM에서 예약된 배치 작업을 사용하는 하이브리드 접근 방식을 구현합니다  
C. 사내 IT 직원이 최적화하는 전용 수동 관리 클러스터를 배포합니다  
D. 리소스를 자동으로 최적화하고 클러스터 관리를 추상화하는 Databricks 서버리스 컴퓨팅을 활용합니다  

---

## NO.146
다음 중 데이터 엔지니어가 INSERT INTO 명령 대신 MERGE INTO 명령을 사용해야 하는 시나리오는 무엇입니까?

A. 데이터의 위치를 변경해야 할 때  
B. 대상 테이블이 외부 테이블일 때  
C. 소스 테이블을 삭제할 수 있을 때  
D. 대상 테이블에 중복 레코드가 포함될 수 없을 때  
E. 소스가 Delta 테이블이 아닐 때  

---

## NO.147
데이터 엔지니어가 클라우드 객체 스토리지에서 Delta Lake 테이블로 원시 JSON 파일을 로드하는 Databricks의 ETL 파이프라인을 구축하고 있습니다. 파이프라인은 ACID 트랜잭션 및 스키마 적용을 보장하면서 여러 동시 작업의 확장 가능한 읽기 및 쓰기를 지원해야 합니다. 엔지니어가 사용해야 할 스토리지 형식은 무엇입니까?

A. Parquet  
B. CSV  
C. Delta Lake  
D. Avro  

---

## NO.148
조직이 AWS의 Databricks 워크스페이스에 저장된 대규모 데이터셋을 Azure에 호스팅된 Databricks 워크스페이스의 파트너 조직과 공유할 계획입니다. 안전하고 효율적인 데이터 공유를 보장하면서 데이터 전송 비용을 최소화하려고 합니다. 크로스 클라우드 데이터 공유와 관련된 데이터 이그레스 비용을 줄이는 전략은 무엇입니까?

A. 공유 전에 데이터셋을 Cloudflare R2 객체 스토리지로 마이그레이션  
B. 더 빠른 데이터 공유를 위해 AWS와 Azure 간 VPN 연결 구성  
C. 추가 구성 없이 Delta Sharing 사용  
D. 이그레스 비용을 모니터링하지 않고 사전 서명된 URL을 통해 데이터 공유  

---

## NO.149
유효한 Databricks 자산 번들 형식은 무엇입니까?

A. YAML 형식: `resources: jobs: hello-job: name: hello-job tasks: - task_key: hello-task ...`  
B. JSON 형식: `"resources":{ "jobs":{ "name":"hello-job", ... }}`  
C. Python dict 형식: `configuration = { "resources":{ ... }}`  
D. HCL 형식: `resources { jobs { name = "hello-job" ... }}`  

---

## NO.150
새로운 데이터 엔지니어링 팀이 ELT 프로젝트에 배정되었습니다. 프로젝트를 완전히 관리하기 위해 데이터베이스 customers에 대한 전체 권한이 필요합니다. 새 팀에 데이터베이스에 대한 전체 권한을 부여하는 데 사용할 수 있는 명령은 무엇입니까?

A. GRANT USAGE ON DATABASE customers TO team;  
B. GRANT ALL PRIVILEGES ON DATABASE team TO customers;  
C. GRANT SELECT PRIVILEGES ON DATABASE customers TO teams;  
D. GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;  
E. GRANT ALL PRIVILEGES ON DATABASE customers TO team;  

---

## NO.151
데이터 분석가가 SQL 프로그램에 일련의 쿼리를 가지고 있습니다. 이 프로그램이 매일 실행되기를 원합니다. 프로그램의 마지막 쿼리는 일요일에만 실행되기를 원합니다. 데이터 엔지니어링 팀에 이 작업을 완료하는 데 도움을 요청합니다. 이 작업을 완료하기 위해 사용할 수 있는 접근 방식은 무엇입니까?

A. Databricks에 이 기능을 추가하기 위한 기능 요청을 제출할 수 있습니다  
B. PySpark를 사용하여 쿼리를 래핑하고 Python의 제어 흐름 시스템을 사용하여 마지막 쿼리를 실행할 시기를 결정할 수 있습니다  
C. 전체 프로그램을 일요일에만 실행할 수 있습니다  
D. 일요일에만 액세스할 수 있도록 마지막 쿼리의 소스 테이블에 대한 액세스를 자동으로 제한할 수 있습니다  
E. 마지막 쿼리에 사용되는 데이터를 새 테이블로 분리하도록 데이터 모델을 재설계할 수 있습니다  

---

## NO.152
데이터 엔지니어가 노트북에서 소규모 개념 증명을 개발하고 있습니다. 전체 노트북을 실행할 때 클러스터 사용량이 급증합니다. 개발 요구사항을 유지하면서 실시간 결과를 얻으려고 합니다. 이러한 요구사항을 충족하는 클러스터는 무엇입니까?

A. 자동 확장이 있는 All Purpose Cluster  
B. Photon이 활성화되고 자동 확장이 있는 Job Cluster  
C. 자동 확장이 활성화된 Job Cluster  
D. 대용량 고정 메모리 크기의 All-Purpose Cluster  

---

## NO.153
데이터 엔지니어가 두 테이블에서 데이터를 가져와 관계형 객체를 만들려고 합니다. 관계형 객체는 다른 세션의 다른 데이터 엔지니어가 사용할 필요가 없습니다. 스토리지 비용을 절약하기 위해 물리적 데이터를 복사하고 저장하는 것을 피하고자 합니다. 데이터 엔지니어가 만들어야 할 관계형 객체는 무엇입니까?

A. Spark SQL Table  
B. View  
C. Database  
D. Temporary view  
E. Delta Table  

---

## NO.154
다음 중 기존 Delta 테이블 my_table에서 age 열의 값이 25보다 큰 행을 제거하고 업데이트된 테이블을 저장하는 코드 블록은 무엇입니까?

A. SELECT * FROM my_table WHERE age > 25;  
B. UPDATE my_table WHERE age > 25;  
C. DELETE FROM my_table WHERE age > 25;  
D. UPDATE my_table WHERE age <= 25;  
E. DELETE FROM my_table WHERE age <= 25;  

---

## NO.155
데이터 엔지니어가 동일한 스키마를 공유하는 두 데이터셋을 결합하고 한 데이터셋의 행을 다른 데이터셋에 추가하려고 합니다. 이 행 단위 결합을 수행하는 Spark DataFrame 작업은 무엇입니까?

A. join  
B. union  
C. merge  
D. intersect  

---

## NO.156
'students' 테이블의 Delta 트랜잭션 로그가 'DESCRIBE HISTORY students' 명령을 사용하여 표시됩니다. 데이터 엔지니어가 로그에 나열된 UPDATE 작업 이전의 테이블을 쿼리해야 합니다. 어떤 명령을 사용해야 합니까? (2개 선택)

A. SELECT * FROM students@v4  
B. SELECT * FROM students TIMESTAMP AS OF '2024-04-22T14:32:47.000+00:00'  
C. SELECT * FROM students FROM HISTORY VERSION AS OF 3  
D. SELECT * FROM students VERSION AS OF 5  
E. SELECT * FROM students TIMESTAMP AS OF '2024-04-22T14:32:58.000+00:00'  

---

## NO.157
Serverless 컴퓨팅 클러스터에서 지원하는 언어는 무엇입니까? (2개 선택)

A. SQL  
B. Python  
C. R  
D. Scala  
E. Java  

---

## NO.158
데이터 엔지니어가 테이블 new_table에 대한 액세스가 필요하지만 올바른 권한이 없습니다. 테이블 소유자에게 권한을 요청할 수 있지만 테이블 소유자가 누구인지 모릅니다. new_table의 소유자를 식별하는 데 사용할 수 있는 접근 방식은 무엇입니까?

A. Data Explorer의 테이블 페이지에서 Permissions 탭을 검토합니다  
B. 이 모든 옵션을 사용하여 테이블의 소유자를 식별할 수 있습니다  
C. Data Explorer의 테이블 페이지에서 Owner 필드를 검토합니다  
D. 클라우드 스토리지 솔루션의 테이블 페이지에서 Owner 필드를 검토합니다  
E. 테이블의 소유자를 식별할 방법이 없습니다  

---

## NO.159
데이터 엔지니어가 쿼리가 필요한 만큼 많은 배치로 사용 가능한 모든 데이터를 처리하도록만 하려면 빈칸을 채우기 위해 어떤 코드 줄을 사용해야 합니까?

A. processingTime(1)  
B. trigger(availableNow=True)  
C. trigger(parallelBatch=True)  
D. trigger(processingTime="once")  
E. trigger(continuous="once")  

---

## NO.160
데이터 엔지니어가 Databricks SQL 대시보드를 하루에 한 번 새로 고치도록 예약하려고 하지만, 관련 SQL 엔드포인트가 필요할 때만 실행되기를 원합니다. 대시보드의 새로 고침 일정에 사용되는 SQL 엔드포인트의 총 실행 시간을 최소화하기 위해 사용할 수 있는 접근 방식은 무엇입니까?

A. 대시보드의 SQL 엔드포인트가 각 쿼리의 SQL 엔드포인트와 일치하도록 할 수 있습니다  
B. 대시보드의 SQL 엔드포인트를 서버리스로 설정할 수 있습니다  
C. SQL 엔드포인트의 Auto Stop 기능을 켤 수 있습니다  
D. SQL 엔드포인트의 클러스터 크기를 줄일 수 있습니다  
E. 대시보드의 SQL 엔드포인트가 포함된 쿼리의 SQL 엔드포인트 중 하나가 아닌지 확인할 수 있습니다  

---

## NO.161
엔지니어링 관리자가 Databricks SQL 쿼리를 사용하여 각 데이터 소스의 수집 지연 시간을 모니터링합니다. 관리자는 매일 쿼리 결과를 확인하지만 매일 수동으로 쿼리를 다시 실행하고 결과를 기다리고 있습니다. 쿼리 결과가 매일 업데이트되도록 하기 위해 관리자가 사용할 수 있는 접근 방식은 무엇입니까?

A. Databricks SQL의 SQL 엔드포인트 페이지에서 쿼리가 1일마다 새로 고치도록 예약할 수 있습니다  
B. Databricks SQL의 SQL 엔드포인트 페이지에서 쿼리가 12시간마다 새로 고치도록 예약할 수 있습니다  
C. Databricks SQL의 쿼리 페이지에서 쿼리가 1일마다 새로 고치도록 예약할 수 있습니다  
D. Jobs UI에서 쿼리가 1일마다 실행되도록 예약할 수 있습니다  
E. Jobs UI에서 쿼리가 12시간마다 실행되도록 예약할 수 있습니다  

---

## NO.162
외부 테이블을 사용해야 하는 시나리오를 식별하세요. 데이터 엔지니어가 parquet bronze 테이블을 생성해야 하며, 외부 위치의 특정 경로에 저장되도록 해야 합니다. 이 시나리오에서 생성할 수 있는 테이블은 무엇입니까?

A. 외부 위치의 특정 경로를 가리키는 LOCATION이 있는 외부 테이블  
B. 외부 위치의 특정 경로를 가리키는 관리 위치가 스키마에 있는 외부 테이블  
C. 외부 위치의 특정 경로를 가리키는 관리 위치가 카탈로그에 있는 관리 테이블  
D. 외부 위치의 특정 경로를 가리키는 LOCATION이 있는 관리 테이블  

---

## NO.163
데이터 엔지니어가 변동하는 워크로드를 가진 대규모 데이터셋에 대해 SQL 쿼리를 처리해야 합니다. 워크로드는 쿼리 볼륨에 따라 자동으로 확장해야 하며, 인프라를 관리하거나 프로비저닝할 필요가 없습니다. 솔루션은 비용 효율적이어야 하며 쿼리 실행 중 사용된 컴퓨팅 리소스에 대해서만 비용이 청구되어야 합니다. 데이터 엔지니어가 사용해야 할 컴퓨팅 옵션은 무엇입니까?

A. Databricks SQL Analytics  
B. Databricks Runtime for ML  
C. Databricks Jobs  
D. Serverless SQL Warehouse  

---

## NO.164
데이터 엔지니어가 데이터 파이프라인의 일부로 Delta 테이블을 사용해야 하지만 적절한 권한이 있는지 모릅니다. 테이블에 대한 권한을 검토할 수 있는 위치는 어디입니까?

A. Jobs  
B. Dashboards  
C. Catalog Explorer  
D. Repos  

---

## NO.165
데이터 분석가가 Delta 테이블에 대해 실행되는 쿼리를 개발했습니다. 데이터 엔지니어링 팀에 쿼리에서 반환된 데이터가 깨끗한지 확인하기 위한 일련의 테스트를 구현하는 데 도움을 요청합니다. 그러나 데이터 엔지니어링 팀은 SQL 대신 Python을 사용합니다. PySpark에서 쿼리를 실행하고 결과를 사용하기 위해 데이터 엔지니어링 팀이 사용할 수 있는 작업은 무엇입니까?

A. SELECT * FROM sales  
B. spark.delta.table  
C. spark.sql  
D. PySpark와 SQL 간에 데이터를 공유할 방법이 없습니다  
E. spark.table  

---

## NO.166
데이터 엔지니어가 매우 큰 데이터셋으로 작업하고 있으며, 관련 데이터를 동일한 파일에 함께 배치하여 쿼리 성능을 개선하려고 합니다. 엔지니어는 자주 필터링되는 열에 Z-ordering을 적용하기로 결정합니다. 어떤 Delta Lake 명령을 사용합니까?

A. OPTIMIZE ZORDER BY  
B. VACUUM ZORDER  
C. CACHE TABLE  
D. ANALYZE TABLE  

---

## NO.167
데이터 엔지니어가 테이블에 일일 업데이트를 할 때 실수를 했다는 것을 인식했습니다. 3일 전 버전으로 테이블을 복원하기 위해 Delta 시간 여행을 사용해야 합니다. 그러나 이전 버전으로 시간 여행을 시도할 때 데이터 파일이 삭제되어 데이터를 복원할 수 없습니다. 데이터 파일이 더 이상 존재하지 않는 이유는 무엇입니까?

A. VACUUM 명령이 테이블에 실행되었습니다  
B. TIME TRAVEL 명령이 테이블에 실행되었습니다  
C. DELETE HISTORY 명령이 테이블에 실행되었습니다  
D. OPTIMIZE 명령이 테이블에 실행되었습니다  
E. HISTORY 명령이 테이블에 실행되었습니다  

---

## NO.168
ON VIOLATION DROP ROW와 ON VIOLATION FAIL UPDATE의 제약 조건 위반에 대한 영향을 식별하세요. 데이터 엔지니어가 Delta Live Table을 사용하여 회사 출장 경비 정산 세부 정보를 관리하는 ETL 파이프라인을 생성했습니다. 직원이 위치 세부 정보를 제공하지 않은 경우 파이프라인을 종료해야 합니다. 이 시나리오를 어떻게 구현할 수 있습니까?

A. CONSTRAINT valid_location EXPECT (location = NULL)  
B. CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL UPDATE  
C. CONSTRAINT valid_location EXPECT (location != NULL) ON DROP ROW  
D. CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL  

---

## NO.169
데이터 엔지니어가 정확한 데이터에 의존하는 회사를 위해 스트리밍 및 배치 소스에서 모두 수집해야 합니다. 때때로 스트리밍 입력을 제공하는 센서가 감지한 일부 데이터가 예상 매개변수를 벗어납니다. 이 경우 데이터를 삭제해야 하지만 스트림은 실패하면 안 됩니다. 이 요구사항을 충족하는 Delta Live Tables 기능은 무엇입니까?

A. Change Data Capture  
B. Error Handling  
C. Monitoring  
D. Expectations  

---

## NO.170
데이터 엔지니어가 이전 팀으로부터 Databricks 파이프라인을 상속받았습니다. 파이프라인이 SLA를 놓치고 있으며, 초기 조사에서 Spark의 메모리 스필이 식별되었습니다. 이러한 증가된 런타임은 비용도 증가시키고 있습니다. 비용을 크게 늘리지 않고 런타임을 줄여야 합니다. 이 문제를 해결하기 위해 데이터 엔지니어가 먼저 해야 할 일은 무엇입니까?

A. "spark.sql.shuffle.partitions" 구성을 조정합니다  
B. 요구사항에 맞게 클러스터에서 자동 확장을 활성화합니다  
C. Photon 활성화 실행 엔진을 사용합니다  
D. 클러스터가 메모리 최적화 노드 유형을 사용하도록 합니다  

---

## NO.171
데이터 엔지니어가 Liquid Clustering 기능이 활성화된 Delta 관리 테이블을 출력으로 생성하는 ETL을 개발했습니다. 여러 소비자가 이 테이블을 읽을 때 시간 지연에 관한 문제를 겪고 있습니다. OPTIMIZE 명령이 명시적으로 실행되었는지 어떻게 확인할 수 있습니까?

A. 시스템 테이블 system.storage.predictive_optimization_operations_history를 확인합니다  
B. SHOW TABLES EXTENDED를 사용하여 사용된 파티션 열을 확인합니다  
C. DESCRIBE DETAIL table을 사용하여 테이블의 파일 크기와 파일 수를 확인합니다  
D. DESCRIBE HISTORY table을 사용하여 OPTIMIZE 작업이 있는지 확인합니다  

---

## NO.172
데이터 엔지니어가 Databricks에서 여러 Delta 테이블이 다양한 변환에 사용되는 데이터 파이프라인을 관리하고 있습니다. 팀은 Delta 테이블, 노트북, 작업, 대시보드 간의 의존성 식별을 포함하여 파이프라인을 통한 데이터 흐름을 추적하려고 합니다. Unity Catalog의 데이터 리니지 기능은 Delta 테이블, 노트북, 작업, 대시보드 간의 관계 시각화를 어떻게 지원합니까?

A. Unity Catalog 리니지는 Delta 테이블, 노트북, 작업 간의 의존성을 시각화하지만 열 레벨 추적이나 대시보드와의 관계는 제공하지 않습니다  
B. Unity Catalog 리니지는 테이블 레벨에서만 관계를 시각화하며 노트북, 작업, 대시보드로는 확장되지 않습니다  
C. Unity Catalog 리니지는 테이블과 노트북 간의 의존성을 추적하는 인터랙티브 그래프를 제공하지만 작업 관련 의존성이나 대시보드 시각화는 제외합니다  
D. Unity Catalog는 Delta 테이블, 노트북, 작업, 대시보드 간의 의존성을 시각화하는 인터랙티브 그래프를 제공하며 열 레벨의 데이터 변환 추적도 지원합니다  

---

## NO.173
데이터 엔지니어가 중앙 Git 리포지토리에서 복제된 Databricks Repo에서 코드를 실행하고 있습니다. 동료가 중앙 Git 리포지토리에 변경 사항이 동기화되었다고 알려줍니다. 데이터 엔지니어는 이제 중앙 Git 리포지토리의 변경 사항을 가져오기 위해 Databricks Repo를 동기화해야 합니다. 이 작업을 수행하기 위해 실행해야 하는 Git 작업은 무엇입니까?

A. Merge  
B. Push  
C. Pull  
D. Commit  
E. Clone  

---

## NO.174
데이터 엔지니어링 팀이 Kafka를 사용하여 이벤트 데이터를 캡처한 후 Databricks에 수집합니다. 팀은 이러한 기록 이벤트를 볼 수 있기를 원합니다. 메달리온 아키텍처가 이미 구축되어 있습니다. 팀은 비용을 고려하고 싶습니다. 이 기록 이벤트 데이터를 어디에 저장해야 합니까?

A. Gold  
B. Silver  
C. Bronze  
D. Raw 레이어  

---

## NO.175
데이터 엔지니어가 Databricks 메달리온 아키텍처에서 Bronze 레이어를 설계하고 있습니다. 원시 데이터는 여러 소스(JSON의 클릭스트림, CSV의 트랜잭션)에서 수집됩니다. Bronze 레이어에 적용되는 작업은 무엇입니까?

A. 변환 없이 원시 데이터를 수집하고 원본 스키마를 보존하며 Delta 형식으로 저장합니다  
B. null 값을 제거하고 스키마를 적용하여 원시 데이터를 정리하고 표준화합니다  
C. 고객 세분화 레이블로 원시 데이터를 풍부하게 하는 복잡한 비즈니스 로직을 적용합니다  
D. 일일 매출 성과 지표를 계산하기 위해 소스 데이터를 집계하고 변환합니다  

---

## NO.176
데이터 엔지니어가 복잡한 실행 일정이 있는 Job이 있으며, 그 일정을 다른 Job으로 전송하려고 합니다. 일정을 프로그래밍 방식으로 표현하고 제출하기 위해 사용할 수 있는 도구는 무엇입니까?

A. pyspark.sql.types.DateType  
B. datetime  
C. pyspark.sql.types.TimestampType  
D. Cron 구문  
E. 이 정보를 프로그래밍 방식으로 표현하고 제출할 방법이 없습니다  

---

## NO.177
글로벌 소매 회사가 여러 카테고리와 리전에 걸쳐 제품을 판매합니다. 각 제품 카테고리의 총 매출액을 계산하고 결과를 category_sales라는 새 dataframe에 저장하세요. 예상 결과를 생성하는 코드는 무엇입니까?

A. `category_sales = sales_df.groupBy("category").agg(sum("sales_amount").alias("total_sales_amount"))`  
B. `category_sales = sales_df.sum("sales_amount").groupBy("category").alias("total_sales_amount")`  
C. `category_sales = sales_df.agg(sum("sales_amount").groupBy("category").alias("total_sales_amount"))`  
D. `category_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))`  

---

## NO.178
데이터 엔지니어가 Databricks SQL 대시보드를 매시간 새로 고치도록 예약하려고 하지만, 관련 SQL 엔드포인트가 필요할 때만 실행되기를 원합니다. 대시보드의 새로 고침 일정에 사용되는 SQL 엔드포인트의 총 실행 시간을 최소화하기 위해 사용할 수 있는 접근 방식은 무엇입니까?

A. SQL 엔드포인트의 Auto Stop 기능을 켤 수 있습니다  
B. 대시보드의 SQL 엔드포인트가 포함된 쿼리의 SQL 엔드포인트 중 하나가 아닌지 확인할 수 있습니다  
C. SQL 엔드포인트의 클러스터 크기를 줄일 수 있습니다  
D. 대시보드의 SQL 엔드포인트가 각 쿼리의 SQL 엔드포인트와 일치하도록 할 수 있습니다  
E. 대시보드의 SQL 엔드포인트를 서버리스로 설정할 수 있습니다  

---

## NO.179
데이터 엔지니어가 DataFrame을 Delta 테이블에 쓰면서 country와 같은 특정 열을 기반으로 데이터를 디렉토리로 물리적으로 분할하려고 합니다. 어떤 Spark DataFrame writer 옵션을 사용해야 합니까?

A. partitionBy  
B. orderBy  
C. groupBy  
D. distributeBy  

---

## NO.180
데이터 엔지니어가 고객 360 데이터셋을 제공해야 합니다. 정합된 "customer_transactions" 데이터셋을 어디에 구축하고, 집계된 보고서용 테이블은 어디에 배치해야 합니까?

A. 두 곳 모두 Silver에 구축하여 모델을 단순하게 유지합니다  
B. "customer_transactions"를 Bronze에 구축하고 보고서용 테이블을 Silver에 배치합니다  
C. "customer_transactions"를 Gold에 구축하고 보고서용 테이블을 Silver에 배치합니다  
D. "customer_transactions"를 Silver에 구축하고 보고서용 테이블을 Gold에 배치합니다  

---

## NO.181
Databricks에서 AutoLoader의 기능은 무엇입니까?

A. Auto Loader는 클라우드 스토리지에서 새 파일을 자동으로 수집하고 처리하며, 배치 및 스트리밍 데이터를 모두 처리하고 스키마 진화를 지원합니다  
B. Auto Loader는 배치 및 스트리밍 데이터를 모두 처리하지만 스키마 진화는 지원하지 않습니다  
C. Auto Loader는 스트리밍 데이터만 처리하고 스키마 진화는 지원하지 않습니다  
D. Auto Loader는 배치 데이터만 처리하고 스키마 진화를 지원합니다  

---

## NO.182
Databricks 단일 태스크 워크플로가 마지막 태스크에서 노트북의 오류로 인해 실패합니다. 데이터 엔지니어가 노트북의 실수를 수정합니다. 워크플로를 다시 실행하기 위해 해야 할 일은 무엇입니까?

A. 태스크를 복구합니다  
B. 파이프라인을 다시 실행합니다  
C. 클러스터를 다시 시작합니다  
D. 클러스터를 전환합니다  

---

## NO.183
Databricks 노트북 버전 관리에 비해 Databricks Repos를 사용하는 이점은 무엇입니까?

A. Databricks Repos는 개발 진행 상황을 자동으로 저장합니다  
B. Databricks Repos는 여러 브랜치 사용을 지원합니다  
C. Databricks Repos를 사용하면 노트북의 이전 버전으로 되돌릴 수 있습니다  
D. Databricks Repos는 특정 변경 사항에 대한 코멘트 기능을 제공합니다  
E. Databricks Repos는 전적으로 Databricks Data Intelligence Platform 내에 있습니다  

---

## NO.184
데이터 엔지니어가 전자상거래 거래 Delta 테이블의 데이터 레이아웃과 쿼리 성능을 최적화해야 합니다. "purchase_date"로 파티셔닝되어 있지만 높은 카디널리티 열 "customer_id" 검색을 최적화하지 못합니다. 특정 날짜 범위 내에서 "customer_id" 필터로 쿼리됩니다. 효율적인 읽기를 위해 데이터 레이아웃을 어떻게 최적화해야 합니까?

A. 기존 파티셔닝을 유지하면서 "customer_id"에 Liquid Clustering을 구현합니다  
B. "customer_id"와 "purchase_date"로 Liquid Clustering을 구현합니다  
C. "customer_id"로 파티셔닝하도록 변경합니다  
D. Delta 캐싱을 활성화합니다  

---

## NO.185
DLT 파이프라인에서 어떤 테이블이 레코드를 삭제하는지 식별하기 위해 데이터 엔지니어가 취할 수 있는 접근 방식은 무엇입니까?

A. DLT 파이프라인을 개발할 때 각 테이블에 대해 별도의 기대를 설정할 수 있습니다  
B. 어떤 테이블이 레코드를 삭제하는지 확인할 수 없습니다  
C. 레코드가 삭제될 때 이메일로 알리도록 DLT를 설정할 수 있습니다  
D. DLT 파이프라인 페이지로 이동하여 각 테이블을 클릭하고 데이터 품질 통계를 볼 수 있습니다  
E. DLT 파이프라인 페이지로 이동하여 "Error" 버튼을 클릭하고 현재 오류를 검토할 수 있습니다  

---

## NO.186
데이터 아키텍트가 employeeId(STRING), startDate(DATE), avgRating(FLOAT) 형식의 테이블이 필요합니다. 테이블 이름이 존재하든 아니든 빈 Delta 테이블을 생성하는 SQL DDL 명령은 무엇입니까?

A. `CREATE TABLE IF NOT EXISTS table_name (employeeId STRING, startDate DATE, avgRating FLOAT)`  
B. `CREATE OR REPLACE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT USING DELTA`  
C. `CREATE OR REPLACE TABLE table_name WITH COLUMNS (...) USING DELTA`  
D. `CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT`  
E. `CREATE OR REPLACE TABLE table_name (employeeId STRING, startDate DATE, avgRating FLOAT)`  

---

## NO.187
더 이상 참조되지 않는 오래된 데이터 파일을 제거하고 스토리지 공간을 회수하려면 어떤 Delta Lake 명령을 실행해야 합니까?

A. OPTIMIZE  
B. VACUUM  
C. DESCRIBE HISTORY  
D. CACHE TABLE  

---

## NO.188
다음 중 데이터베이스 customer360의 위치를 반환하는 명령은 무엇입니까?

A. DESCRIBE LOCATION customer360;  
B. DROP DATABASE customer360;  
C. DESCRIBE DATABASE customer360;  
D. ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user');  
E. USE DATABASE customer360;  

---

## NO.189
데이터 엔지니어가 온프레미스 PostgreSQL의 매출 데이터를 Azure Synapse의 고객 데이터와 결합해야 합니다. 데이터 중복을 피하고 최신 정보를 보장해야 합니다. Databricks를 사용하여 어떻게 달성합니까?

A. 두 소스의 데이터를 CSV 파일로 내보내고 Databricks에 업로드합니다  
B. Lakehouse Federation을 사용하여 두 데이터 소스를 직접 쿼리합니다  
C. 두 소스의 데이터를 단일 데이터베이스에 수동으로 동기화합니다  
D. Databricks에 데이터를 수집하기 위한 사용자 정의 ETL 파이프라인을 개발합니다  

---

## NO.190
Auto Loader가 데이터를 증분적으로 처리하는 데 사용하는 도구는 무엇입니까?

A. Checkpointing  
B. Spark Structured Streaming  
C. Data Explorer  
D. Unity Catalog  
E. Databricks SQL  

---

## NO.191
id STRING = 'a1', rank INTEGER = 6, rating FLOAT = 9.4 레코드를 기존 Delta 테이블 my_table에 추가하는 SQL 명령은 무엇입니까?

A. INSERT INTO my_table VALUES ('a1', 6, 9.4)  
B. my_table UNION VALUES ('a1', 6, 9.4)  
C. INSERT VALUES ('a1', 6, 9.4) INTO my_table  
D. UPDATE my_table VALUES ('a1', 6, 9.4)  
E. UPDATE VALUES ('a1', 6, 9.4) my_table  

---

## NO.192
데이터 엔지니어가 Unity Catalog가 있는 Databricks에서 새로운 bronze 수집 파이프라인을 온보딩하고 있습니다. 팀은 Databricks가 스토리지 레이아웃, 플랫폼 최적화, 수명 주기 관리를 처리하기를 원합니다. 어떤 테이블 유형을 생성해야 합니까?

A. Unity Catalog가 메타데이터와 기본 데이터 수명 주기를 모두 관리하는 관리 테이블  
B. 외부 볼륨을 가리키는 LOCATION이 있는 외부 테이블  
C. 외부 카탈로그에서 페더레이션된 외부 테이블  
D. 파일에 대한 임시 뷰  

---

## NO.193
여러 외부 테이블에 대한 액세스를 어떻게 관리해야 합니까?

A. 컨테이너 레벨에서 Azure Blob Storage 권한을 설정합니다  
B. 모든 외부 테이블에 대한 전체 액세스 권한이 있는 단일 사용자 역할을 만듭니다  
C. Databricks 워크스페이스 레벨에서 권한을 부여합니다  
D. Unity Catalog를 사용하여 각 외부 테이블에 대한 액세스 제어 및 권한을 개별적으로 관리합니다  

---

## NO.194
Auto Loader가 유형 추론이나 스키마 힌트 없이 JSON 소스에서 수집할 때 모든 열을 문자열 유형으로 추론한 이유는 무엇입니까?

A. 특정 스키마와 추론된 스키마 간에 유형 불일치가 있었습니다  
B. JSON 데이터는 텍스트 기반 형식입니다  
C. Auto Loader는 문자열 데이터에서만 작동합니다  
D. 모든 필드에 최소 하나의 null 값이 있었습니다  
E. Auto Loader는 수집된 데이터의 스키마를 추론할 수 없습니다  

---

## NO.195
CREATE TABLE AS SELECT 문을 사용할 때 CSV보다 Parquet에서 외부 테이블을 생성하는 이점은 무엇입니까?

A. Parquet 파일은 파티셔닝할 수 있습니다  
B. CREATE TABLE AS SELECT 문은 파일에 사용할 수 없습니다  
C. Parquet 파일은 잘 정의된 스키마를 가지고 있습니다  
D. Parquet 파일은 최적화할 수 있습니다  
E. Parquet 파일은 Delta 테이블이 됩니다  

---

## NO.196
워크스페이스에서 사용되는 데이터 소스와 테이블을 확인하기 위해 어떤 Databricks 기능을 사용할 수 있습니까?

A. 리니지 기능 - 보고서에서만 테이블 사용 위치를 강조합니다  
B. 리니지 기능 - 노트북에서만 테이블 사용 위치를 강조합니다  
C. 리니지 기능 - 노트북, 다른 테이블, 보고서의 모든 의존성을 보여줍니다  
D. 리니지 기능은 지난 3개월만 추적하므로 사용하지 마세요  

---

## NO.197
Job 실패 시 Job 소유자에게 이메일을 보내기 위해 사용해야 하는 접근 방식은 무엇입니까?

A. 노트북의 각 셀에 알림 시스템을 수동으로 프로그래밍합니다  
B. Job 페이지에서 Alert을 설정합니다  
C. 노트북에서 Alert을 설정합니다  
D. Job 실패 시 Job 소유자에게 알릴 방법이 없습니다  
E. MLflow Model Registry Webhooks  

---

## NO.198
Auto Loader와 항상 호환되는 워크로드 유형은 무엇입니까?

A. 스트리밍 워크로드  
B. 머신러닝 워크로드  
C. 서버리스 워크로드  
D. 배치 워크로드  
E. 대시보드 워크로드  

---

## NO.199
sales 테이블(a1/28.94/7, a3/874.12/23, a4/8.99/1)과 favorite_stores 테이블(a1/s1, a2/s1, a4/s2)에 대해 LEFT JOIN을 실행한 결과는 무엇입니까?

A. a1/28.94/s1, a4/8.99/s2  
B. a1/28.94/7/s1, a4/8.99/1/s2  
C. a1/28.94/s1, a3/874.12/NULL, a4/8.99/s2  
D. a1/28.94/s1, a2/NULL/s1, a3/874.12/NULL, a4/8.99/s2  
E. a1/28.94/s1, a2/NULL/s1, a4/8.99/s2  

---

## NO.200
데이터 엔지니어가 Databricks가 인스턴스 유형을 자동 선택하고, 확장을 관리하고, Photon을 적용하고, 런타임 업그레이드를 자동으로 처리하기를 원합니다. 어떻게 해야 합니까?

A. Unity Catalog가 활성화되고 리전 지원이 가능한 워크플로용 서버리스 컴퓨팅에서 작업을 실행합니다  
B. Pro SQL warehouse를 사용하고 Python 노트북 태스크를 파이프라인 단계로 예약합니다  
C. 단일 태스크 Job 클러스터에서 인스턴스 패밀리와 워커를 수동으로 설정합니다  
D. 클러스터 정책으로 All-purpose 클러스터를 사용합니다  

---

## NO.201
FILTER 고차 함수를 사용하여 5년 이상 경험을 가진 직원을 필터링하는 올바른 코드는 무엇입니까?

A. `SELECT store_id, employees, FILTER(employees, i -> i.years_exp > 5) AS exp_employees FROM stores;`  
B. `SELECT store_id, employees, FILTER(exp_employees, years_exp > 5) AS exp_employees FROM stores;`  
C. `SELECT store_id, employees, FILTER(employees, years_exp > 5) AS exp_employees FROM stores;`  
D. `SELECT store_id, employees, CASE WHEN employees.years_exp > 5 THEN employees ELSE NULL END AS exp_employees FROM stores;`  
E. `SELECT store_id, employees, FILTER(exp_employees, i -> i.years_exp > 5) AS exp_employees FROM stores;`  

---

## NO.202
Bronze 레이어를 구축할 때 일반적으로 포함되는 변환은 무엇입니까?

A. 로드 날짜/시간, 프로세스 ID 열을 포함합니다  
B. 비즈니스 규칙 및 변환  
C. 광범위한 데이터 정리를 수행합니다  
D. 여러 소스의 데이터를 집계합니다  

---

## NO.203
데이터 팀이 클러스터 풀을 활용하고자 하는 시나리오는 무엇입니까?

A. 자동 보고서를 가능한 빨리 새로 고쳐야 합니다  
B. 자동 보고서를 재현 가능하게 만들어야 합니다  
C. 자동 보고서를 테스트하여 오류를 식별해야 합니다  
D. 자동 보고서를 여러 협업자 간에 버전 제어해야 합니다  
E. 자동 보고서를 모든 이해관계자가 실행할 수 있어야 합니다  

---

## NO.204
데이터셋이 메모리에 맞지 않아 디스크에 유지해야 합니다. 디스크 스토리지를 지원하는 Spark 지속성 수준은 무엇입니까?

A. MEMORY_ONLY  
B. MEMORY_AND_DISK  
C. MEMORY_SERIALIZED  
D. MEMORY_ONLY_SER  

---

## NO.205
Databricks 감사 로그에서 이벤트는 어떤 형식으로 포맷됩니까?

A. JSON 형식  
B. CSV 형식  
C. XML 형식  
D. 일반 텍스트 형식  

---

## NO.206
동시에 작은 쿼리를 실행하는 팀 구성원이 많을 때 SQL 쿼리 지연 시간을 개선하기 위한 접근 방식은 무엇입니까?

A. SQL 엔드포인트의 클러스터 크기를 늘립니다  
B. SQL 엔드포인트의 스케일링 범위의 최대 한도를 늘립니다  
C. SQL 엔드포인트의 Auto Stop 기능을 켭니다  
D. SQL 엔드포인트의 Serverless 기능을 켭니다  
E. Serverless 기능을 켜고 Spot 인스턴스 정책을 "Reliability Optimized"로 변경합니다  

---

## NO.207
대규모 테이블과 몇 메가바이트의 소규모 룩업 테이블 간 조인 성능을 개선하기 위한 Spark 최적화 기술은 무엇입니까?

A. Shuffle join  
B. Broadcast join  
C. Sort merge join  
D. Cartesian join  

---

## NO.208
새로운 Databricks Job Task의 Depends On 필드에서 Task를 선택해야 하는 시나리오는 무엇입니까?

A. 다른 태스크가 새 태스크로 교체되어야 할 때  
B. 다른 태스크가 새 태스크가 시작되기 전에 실패해야 할 때  
C. 다른 태스크가 동일한 의존성 라이브러리를 가질 때  
D. 다른 태스크가 가능한 적은 컴퓨팅 리소스를 사용해야 할 때  
E. 다른 태스크가 성공적으로 완료된 후 새 태스크가 시작되어야 할 때  

---

## NO.209
각 리전의 총 매출액을 계산하여 region_sales에 저장하는 코드는 무엇입니까? (예상: North 250, South 500, East 250, West 400)

A. `region_sales = sales_df.groupBy("category").sum("sales_amount").alias("total_sales_amount")`  
B. `region_sales = sales_df.groupBy("region").agg(sum("sales_amount").alias("total_sales_amount"))`  
C. `region_sales = sales_df.sum("sales_amount").groupBy("region").alias("total_sales_amount")`  
D. `region_sales = sales_df.agg(sum("sales_amount").groupBy("region").alias("total_sales_amount"))`  

---

## NO.210
매출 $0인 매장 수가 0보다 클 때마다 메시징 webhook을 통해 전체 팀에 알리기 위해 사용할 수 있는 접근 방식은 무엇입니까?

A. 사용자 정의 템플릿으로 Alert을 설정합니다  
B. 새 이메일 알림 대상으로 Alert을 설정합니다  
C. 일회성 알림으로 Alert을 설정합니다  
D. 새 webhook 알림 대상으로 Alert을 설정합니다  
E. 알림 없이 Alert을 설정합니다  

---

## NO.211
데이터 레이크하우스가 데이터 엔지니어링 팀과 데이터 분석 팀의 보고서가 다른 문제를 어떻게 완화할 수 있습니까?

A. 두 팀 모두 작업을 자동 확장합니다  
B. 두 팀 모두 작업에 동일한 소스 오브 트루스를 사용합니다  
C. 두 팀 모두 동일한 부서에 보고하도록 재조직합니다  
D. 두 팀 모두 실시간으로 협업할 수 있습니다  
E. 두 팀 모두 애드혹 요청에 더 빠르게 응답합니다  

---

## NO.212
특정 사용 사례에 특화된 사일로화된 데이터 아키텍처를 단순화하고 통합하는 데 사용할 수 있는 것은 무엇입니까?

A. 이 중 없음  
B. Data lake  
C. Data warehouse  
D. 이 모든 것  
E. Data lakehouse  

---

## NO.213
데이터 엔지니어가 로컬 IDE에서 PySpark 파이프라인을 구축하고 UDF를 등록할 계획입니다. Databricks Connect로 런타임 문제를 방지하기 위해 해야 할 일은 무엇입니까?

A. UDF 사용 시 로컬 Python 마이너 버전을 클러스터와 일치시키고 호환 가능한 Databricks Connect 패키지를 사용합니다  
B. PySpark 마이너 버전만 일치하면 되므로 모든 로컬 Python 버전을 사용합니다  
C. Databricks Connect는 할당된/공유 클러스터를 지원하지 않으므로 서버리스를 사용합니다  
D. Databricks Connect와 충돌하므로 Unity Catalog를 비활성화합니다  

---

## NO.214
Gold 레이어의 특성인 두 가지 항목은 무엇입니까? (2개 선택)

A. 기록 리니지  
B. 원시 데이터  
C. 정규화됨  
D. 비정규화됨  
E. 읽기 최적화됨  

---

## NO.215
코드 실행 및 변수를 실시간으로 검사하기 위한 도구는 무엇입니까?

A. Cluster Logs  
B. Job Execution Dashboard  
C. Python Notebook Interactive Debugger  
D. SQL Analytics  

---

## NO.216
DLT 쿼리에 STREAM 함수가 포함된 이유는 무엇입니까?

A. STREAM 함수는 필요하지 않으며 오류를 발생시킵니다  
B. 생성되는 테이블이 라이브 테이블이기 때문입니다  
C. customers 테이블이 스트리밍 라이브 테이블이기 때문입니다  
D. PySpark DataFrame에 대한 Structured Streaming 쿼리 참조이기 때문입니다  
E. customers 테이블의 데이터가 마지막 실행 이후 업데이트되었기 때문입니다  

---

## NO.217
원래 데이터 엔지니어가 조직을 떠나 더 이상 액세스 권한이 없을 때, Data Explorer에서 Delta 테이블의 소유권을 이전해야 하는 사람은 누구입니까?

A. Databricks 계정 담당자  
B. 이 이전은 불가능합니다  
C. 워크스페이스 관리자  
D. 새 리드 데이터 엔지니어  
E. 원래 데이터 엔지니어  

---

## NO.218
파티션 열에 대한 필터링 쿼리가 빠르게 실행되는 주된 이유는 무엇입니까?

A. Data caching  
B. Partition pruning  
C. Broadcast joins  
D. Data replication  

---

## NO.219
SQLite 데이터베이스에서 Databricks 테이블을 생성할 때 USING 절에 들어갈 코드는 무엇입니까?

A. org.apache.spark.sql.jdbc  
B. autoloader  
C. DELTA  
D. sqlite  
E. org.apache.spark.sql.sqlite  

---

## NO.220
Databricks Connect로 서버리스 컴퓨팅에 연결할 때 먼저 확인해야 하는 워크스페이스 요구사항은 무엇입니까?

A. Unity Catalog가 비활성화되고 Databricks Connect 버전이 서버리스 Runtime 버전보다 낮은지 확인합니다  
B. Unity Catalog가 활성화되고 Databricks Connect 버전이 서버리스를 지원하는지 확인합니다  
C. 할당된 액세스 모드 클러스터만 사용되는지 확인합니다  
D. 로컬 Spark 버전이 서버리스 Spark 버전과 같은지 확인합니다  

---

## NO.221
ADLS에 저장된 데이터를 참조하는 외부 테이블을 생성하기 위한 단계는 무엇입니까?

A. CREATE MANAGED TABLE 문에 LOCATION 절을 지정합니다  
B. LOCATION 절 없이 CREATE UNMANAGED TABLE 문을 사용합니다  
C. CREATE TABLE 문에 외부 데이터 경로와 함께 LOCATION 절을 지정합니다  
D. LOCATION 절 없이 CREATE EXTERNAL TABLE 문을 사용합니다  

---

## NO.222
Databricks 메달리온 아키텍처에서 Silver 레이어의 주요 기능은 무엇입니까?

A. 감사 목적으로만 기록 데이터를 저장합니다  
B. 비즈니스 분석을 위해 데이터를 집계하고 풍부하게 합니다  
C. 추가 처리를 위해 데이터를 검증, 정리, 중복 제거합니다  
D. 원래 상태로 원시 데이터를 수집합니다  

---

## NO.223
PII 포함을 나타내는 테이블 속성을 추가하기 위한 코드는 무엇입니까?

A. 테이블에 PII 포함 여부를 나타낼 방법이 없습니다  
B. "COMMENT PII"  
C. TBLPROPERTIES PII  
D. COMMENT "Contains PII"  
E. PII  

---

## NO.224
NULL 값 수가 100에 도달할 때마다 메시징 webhook을 통해 전체 팀에 알리기 위한 접근 방식은 무엇입니까?

A. 사용자 정의 템플릿으로 Alert을 설정합니다  
B. 새 이메일 알림 대상으로 Alert을 설정합니다  
C. 새 webhook 알림 대상으로 Alert을 설정합니다  
D. 일회성 알림으로 Alert을 설정합니다  
E. 알림 없이 Alert을 설정합니다  

---

## NO.225
원시 데이터에서 Bronze 테이블로의 스트리밍 hop을 수행하는 쿼리는 무엇입니까?

A. `spark.table("sales").groupBy("store").agg(sum("sales"))` → writeStream → complete  
B. `spark.table("sales").filter(...)` → writeStream → append  
C. `spark.table("sales").withColumn(...)` → writeStream → append  
D. `spark.read.load(rawSalesLocation)` → write → append  
E. `spark.readStream.load(rawSalesLocation)` → writeStream → append  

---

## NO.226
CSV 파일에서 테이블을 생성할 때 빈칸에 들어갈 코드는 무엇입니까?  
`CREATE TABLE new_table _____ OPTIONS (header = "true", delimiter = "|") LOCATION "path/to/csv"`

A. 이 코드 줄 중 어느 것도 필요하지 않습니다  
B. USING CSV  
C. FROM CSV  
D. USING DELTA  
E. FROM "path/to/csv"  

---

## NO.227
편향된 키 값으로 인해 일부 파티션에 레코드가 집중되어 실행기 간 불균등한 분배가 발생하는 Spark 문제는 무엇입니까?

A. Data skew  
B. Broadcast failure  
C. Lazy evaluation  
D. Schema evolution  

---

## NO.228
기존 SLA를 유지하면서 Databricks Serverless로 마이그레이션하는 첫 번째 단계는 무엇입니까?

A. 소스 API, 파일, JDBC/ODBC 연결의 레거시 수집 파이프라인  
B. 최신 Databricks 런타임 및 Unity Catalog와 호환되는 자주 실행되고 효율적인 Python 기반 데이터 변환 파이프라인  
C. 최신 Databricks 런타임 및 Unity Catalog와 호환되는 자주 실행되고 효율적인 Scala 기반 데이터 변환 파이프라인  
D. 낮은 빈도의 BI 대시보딩 및 애드혹 SQL Analytics
