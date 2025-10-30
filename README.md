# 🌏 TABIVITO 실행 방법


## 🛠 사용 기술
- **Frontend:** Vue.js, VITE  
- **Backend:** Spring Boot  
- **Database:** MySQL  
- **IDE:** IntelliJ IDEA  
- **JDK:** 21  

---

## 💻 설치해야 하는 프로그램

필수 설치 항목:
  - IntelliJ IDEA: Java 백엔드 개발용 IDE
  - Node.js: 프론트엔드(Vite + Vue.js) 실행용 런타임
  - JDK 21: Spring Boot 구동용 Java Development Kit
  - MySQL: 데이터베이스 서버
  - MySQL Workbench: MySQL 데이터 관리 및 쿼리 실행용 GUI 툴

권장 버전:
  - IntelliJ IDEA: 2024 이상
  - Node.js: 18.x 이상
  - MySQL: 8.x 이상
  - JDK: 21

---

## 🚀 실행 방법

### 1️⃣ 프로젝트 열기
1. 프로젝트 폴더를 **다운로드(Pull)** 합니다.  
2. **IntelliJ IDEA**로 `TABIVITO` 프로젝트를 엽니다.  
3. **JDK 21 버전**이 설정되어 있는지 확인합니다.  
   - IntelliJ 메뉴 → `File > Project Structure > Project SDK`  
   - SDK를 **JDK 21**로 설정합니다.

---

### 2️⃣ 데이터베이스 설정
1. **MySQL**을 실행합니다.  
2. `TABIVITO/backend/sql` 경로에 있는 **tabivito_db.sql** 파일을 이용해 데이터베이스를 구축합니다.  
3. 기본 설정값은 다음과 같습니다:
   ID: root
   Password: 1234
4. 필요시 `application.properties` 파일의 DB 연결 정보를 수정할 수 있습니다.

---

### 3️⃣ 백엔드 실행
1. `TABIVITO/backend` 폴더를 엽니다.  
2. `src/main/resources/application.properties` 파일에서 설정을 확인합니다.  
3. IntelliJ에서 **Spring Boot**를 실행합니다.  
   - `TabivitoApplication.java` 파일을 열고 **Run ▶** 버튼 클릭  
   - 또는 상단 메뉴에서 `Run > Run 'TabivitoApplication'` 선택  

---

### 4️⃣ 프론트엔드 실행
1. 명령 프롬프트(cmd) 또는 터미널을 실행합니다.  
2. 아래 명령어를 입력해 프론트엔드 폴더로 이동합니다:
   cd C:\TABIVITO\frontend
3. 프론트엔드를 실행합니다:
   npm run dev

---

### 5️⃣ 웹 접속
실행 후 터미널에 표시되는 주소로 접속합니다.  
예시:

VITE v4.x  ready in 300ms  
➜  Local: http://localhost:5173/

브라우저에서 http://localhost:5173 을 열면 TABIVITO 웹이 실행됩니다.

---

## 🎉 완료!
이제 **TABIVITO 웹 서비스**를 즐기세요! ✨  
Enjoy My Web!!
