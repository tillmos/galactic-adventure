namespace galactic;

entity Spacefarers {
  @cds.autoGenerate: true
  key ID: UUID;                  

  name: String(111);
  email: String(111);
  @UI.Editable: true
   @Capabilities.Updatable: true
  stardustCollection: Integer;
  wormholeNavigationSkill: Integer;
  originPlanet: String;
  @UI.Editable: true
  @Capabilities.Updatable: true
  spacesuitColor: String;

  department: Association to Departments;
  position: Association to Positions;


  @UI.LineItem: [
    { Value: name, Label: 'Name' },
    { Value: email, Label: 'Email' },
    { Value: stardustCollection, Label: 'Stardust' },
    { Value: wormholeNavigationSkill, Label: 'Wormhole Skill' },
    { Value: originPlanet, Label: 'Origin Planet' },
    { Value: spacesuitColor, Label: 'Spacesuit Color' },
    { Value: department.name, Label: 'Department' },
    { Value: position.title, Label: 'Position' }
  ]
  dummy: String;
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