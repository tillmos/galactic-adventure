namespace galactic;

entity Spacefarers {
  @cds.autoGenerate: true
  key ID: UUID;                  
  name: String(111);
  email: String(111);
  stardustCollection: Integer;
  wormholeNavigationSkill: Integer;
  originPlanet: String;
  spacesuitColor: String;

  department: Association to Departments;
  position: Association to Positions;

}


entity Departments {
  @cds.autoGenerate: true
  key ID: UUID;
  name: String;
}

entity Positions {
  @cds.autoGenerate: true
  key ID: UUID;
  title: String;
  department: Association to Departments;
}