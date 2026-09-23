#this file defines all configuration values the app needs
#(DB connection info, app name, ect)

#pydantic_setiings: automatically reades enviornment variables and validates their types
from pydantic_settings import BaseSettings,SettingsConfigDict

class Settings(BaseSettings):
    #MongoDB Settings
    MONGO_URI: str = "mongodb://localhost:27017"
    MONGO_DB_NAME: str = "it_servicedesk"

    #Gives the app a name
    APP_NAME: str = "IT Service Desk App API"

    #Inform pydantic-settings to load values from .env file
    model_config = SettingsConfigDict(env_file=".env",env_file_encoding="utf-8")

#Shared settings object that all other files can import
settings = Settings()