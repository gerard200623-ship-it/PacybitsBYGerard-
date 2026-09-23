@echo off
echo ====================================
echo   PACYBITS FC 27 - Crear EXE
echo ====================================
echo.

REM Instalar dependencias si no estan instaladas
echo Comprobando e instalando dependencias...
python -m pip install pillow pyinstaller pywebview pythonnet

echo.
echo Creando ejecutable Pacybits_FC27.exe...
python -m PyInstaller --onefile --windowed --name "Pacybits_FC27" --icon="app_icon.ico" --add-data="ui;ui" --add-data="app_icon.ico;." --hidden-import="clr" --hidden-import="pythonnet" --hidden-import="webview.platforms.winforms" --hidden-import="bottle" --clean pacybits_app.py

echo.
echo ====================================
echo   LISTO! 
echo   El ejecutable esta en la carpeta "dist"
echo ====================================
echo.
pause