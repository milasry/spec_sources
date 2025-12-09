from sqlalchemy.orm import Session
from . import models, schemas

def get_all_sources(db: Session):
   return db.query(models.SpectatorSource).all()

def create_source(db: Session, source: schemas.SpectatorSourceCreate):
   db_source = models.SpectatorSource(name=source.name, email=source.email)
   db.add(db_source)
   db.commit()
   db.refresh(db_source)
   return db_source
