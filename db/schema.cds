namespace galactic;

entity Spacefarers {
  key ID: UUID;                  
  name: String(111);
  stardustCollection: Integer;
  wormholeNavigationSkill: Integer;
  originPlanet: String;
  spacesuitColor: String;

  department: Association to Departments;
  position: Association to Positions;

}


entity Departments {
  key ID: UUID;
  name: String;
}

entity Positions {
  key ID: UUID;
  title: String;
  department: Association to Departments;
}