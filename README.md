# SonnenNetz
Tech Challenge Project
### React + TypeScript + Vite and Django REST + SQLite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Also, we use the Django REST framework for the backend.

For the details, please check:

- [@django-rest-framework](https://www.django-rest-framework.org/)
- [@SqLite](https://www.sqlite.org/whentouse.html)

# Installation and Environment Setup (Linux)
## Frontend
1. Pull the repo into your local machine.
   ```bash
   git pull https://github.com/Dogaska/SonnenNetz.git
   ```
   Then cd into the main project folder:
   ```bash
   cd frontend
   ```
   
2. Installation of node.js and npm (node package manager)
    Check if they have already installed.
   ```bash
    node -v
    npm -v
   ```
   If not installed, install Node.js from this link:
        https://nodejs.org/en/download/package-manager
   If not installed, install Node Package Manager using the following command:
   ```bash
   npm install
   ```

3.  Try to run the project in dev mode and copy and paste the provided URL into the terminal of your browser. You will be able to see the pages after doing the backend setup.
    ```bash
    npm run dev
    ```
 4. After that, you will see the link.
    
    ![image](https://github.com/user-attachments/assets/83efbe75-8cc3-42cb-9bed-7e27212def5e)

    
Note!: Here is a helper link which you can find similar instructions --> https://www.photondesigner.com/articles/use-react?ref=yt

## Backend
1.  Change the directory to the backend folder.
    ```bash
    cd backend
    ```
    
2.  Check your python version. It should be Python 3.10.
    ```bash
    python –version
    ```
    
3.  Create a virtual environment.
    First, install python3.10 and "venv" virtual environment for python3.10.
    ```bash
    sudo apt-get install python3.10 python3.10-venv
    ```
    
    - If you have already installed python3.10, you can only install the venv.
    ```bash
    sudo apt install python3.10-venv
    ```
    
4.  After installations, create the virtual environment. We also used "venv" as the name of the virtual environment.
    ```bash
    python3.10 -m venv venv
    ```
    
5.  You will be able to activate the virtual environment.
    ```bash
    source venv/bin/activate
    ```
    
6.  Check your pip version
    ```bash
    pip --version
    ```
    
    If pip isn’t already installed, then first try to bootstrap it from the standard library:
    ```bash
    python3 -m pip install --upgrade pip setuptools wheel
    ```
    
8.  Install requirements.
    ```bash
    pip install -r requirements.txt
    ```
    
9.  Lastly, in your backend directorm run following commands.
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
    
10. If you run the server you will see the link.
   
    ![image](https://github.com/user-attachments/assets/710d2415-9360-43dd-abd2-6e0ecf8f72ec)


# Installation and Environment Setup (Windows)
## Frontend
1. Pull the repo into your local machine.
   ```bash
   git pull https://github.com/Dogaska/SonnenNetz.git
   ```
   Then cd into the main project folder:
   ```bash
   cd frontend
   ```
   
2. Installation of node.js and npm (node package manager)
    Check if they have already installed.
   ```bash
    node -v
    npm -v
   ```
   If not installed, install Node.js from this link:
        https://nodejs.org/en/download/package-manager
   If not installed, install Node Package Manager using the following command:
   ```bash
   npm install
   ```

3.  Try to run the project in dev mode and copy and paste the provided URL into the terminal of your browser. You will be able to see the pages after doing the backend setup.
    ```bash
    npm run dev
    ```
 4. After that, you will see the link.
    
    ![image](https://github.com/user-attachments/assets/83efbe75-8cc3-42cb-9bed-7e27212def5e)

    
Note!: Here is a helper link which you can find similar instructions --> https://www.photondesigner.com/articles/use-react?ref=yt

## Backend
1.  Change the directory to the backend folder.
    ```bash
    cd backend
    ```
    
2.  Check your python version. It should be Python 3.10.
    ```bash
    python --version
    ```
    
3.  Create a virtual environment.
    First, install python3.10 and "venv" virtual environment for python3.10.
    ```bash
    py -m pip install --upgrade pip
    py -m pip install virtualenv
    ```
    
4.  After installations, create the virtual environment. We also used "venv" as the name of the virtual environment.
    ```bash
    py -m venv venv
    ```
    
5.  You will be able to activate the virtual environment.
    ```bash
    .\venv\Scripts\activate
    ```
    
6.  Check your pip version
    ```bash
    pip --version
    ```
    
    If pip isn’t already installed, then first try to bootstrap it from the standard library:
    ```bash
    py -m pip install --upgrade pip setuptools wheel
    ```
    
8.  Install requirements.
    ```bash
    pip install -r requirements.txt
    ```
    
9.  Lastly, in your backend directorm run following commands.
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
    
10. If you run the server you will see the link.
   
    ![image](https://github.com/user-attachments/assets/710d2415-9360-43dd-abd2-6e0ecf8f72ec)


# Installation and Environment Setup (macOS)
## Frontend
1. Pull the repo into your local machine.
   ```bash
   git pull https://github.com/Dogaska/SonnenNetz.git
   ```
   Then cd into the main project folder:
   ```bash
   cd frontend
   ```
   
2. Installation of node.js and npm (node package manager)
    Check if they have already installed.
   ```bash
    node -v
    npm -v
   ```
   If not installed, install Node.js from this link:
        https://nodejs.org/en/download/package-manager
   If not installed, install Node Package Manager using the following command:
   ```bash
   npm install -g npm@latest
   ```

3.  Try to run the project in dev mode and copy and paste the provided URL into the terminal of your browser. You will be able to see the pages after doing the backend setup.
    ```bash
    npm run dev
    ```
 4. After that, you will see the link.
    
    ![image](https://github.com/user-attachments/assets/83efbe75-8cc3-42cb-9bed-7e27212def5e)

    
Note!: Here is a helper link which you can find similar instructions --> https://www.photondesigner.com/articles/use-react?ref=yt

## Backend
1.  Change the directory to the backend folder.
    ```bash
    cd backend
    ```
    
2.  Check your python version. It should be Python 3.10.
    ```bash
    python3 –version
    ```
    
3.  Create a virtual environment.
    First, install python3.10 and "venv" virtual environment for python3.10.
    ```bash
    brew install python@3.10
    ```
    
    - If you have already installed python3.10, you can only install the venv.
    ```bash
    python3.10 -m pip install virtualenv
    ```
    
4.  After installations, create the virtual environment. We also used "venv" as the name of the virtual environment.
    ```bash
    python3.10 -m venv venv
    ```
    
5.  You will be able to activate the virtual environment.
    ```bash
    source venv/bin/activate
    ```
    
6.  Check your pip version
    ```bash
    pip --version
    ```
    
    If pip isn’t already installed, then first try to bootstrap it from the standard library:
    ```bash
    python3 -m pip install --upgrade pip setuptools wheel
    ```
    
8.  Install requirements.
    ```bash
    pip install -r requirements.txt
    ```
    
9.  Lastly, in your backend directorm run following commands.
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
    
10. If you run the server you will see the link.
   
    ![image](https://github.com/user-attachments/assets/710d2415-9360-43dd-abd2-6e0ecf8f72ec)
