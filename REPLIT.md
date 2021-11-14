**Replit**

  ```bash
  python3 -m pip install poetry
  ```
  ```bash
  python3 -m poetry install
  ```
  ```bash
  python3 -m poetry lock
  ```
  ```bash
  python3 -m poetry add Flask python
  ```

**Heroku**

  ```bash
  python3 -m pip install Flask gunicorn
  ```
  ```bash
  python3 -m pip freeze > requirements.txt
  ```

**Local**

- using `venv` module
  ```bash
  python -m venv env
  ```
  ```termianl
  env\Scripts\activate
  ```
  ```bash
  deactivate
  ```
  ```bash
  pip install -r requirements.txt
  ```

- you can also use `pipenv` to manage virtual environment.

  ```bash
  pip install pipenv
  ```
    ```bash
  pipenv shell
  ```
    ```bash
  exit
  ```
    ```bash
  pipenv install
  ```

**Run**
  ```bash
  python3 main.py
  ```