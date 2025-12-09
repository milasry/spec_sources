from pydantic import BaseModel

class SpectatorSourceBase(BaseModel):
   name: str
   email: str

class SpectatorSourceCreate(SpectatorSourceBase):
    pass

class SpectatorSource(SpectatorSourceBase):   
    id: int
    class Config:
        orm_mode = True
