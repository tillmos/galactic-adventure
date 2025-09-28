using galactic from '../db/schema';

service GalacticService {
  /*
  @restrict: [
    { grant: '*', to: 'authenticated-user' },
    { grant: '*', to: 'Admin' }
  ]
  */

  @(
    UI: {
      PresentationVariant: { SortOrder: [ { By: 'stardustCollection', Descending: true } ] },
      SelectionFields: [ name, spacesuitColor ],
      LineItem: [
        { Value: name, Label: 'Spacefarer' },
        { Value: stardustCollection, Label: 'Stardust Collection' },
        { Value: spacesuitColor, Label: 'Spacesuit Color' }
      ]
    }
  )
  entity Spacefarers as projection on galactic.Spacefarers;

  entity Departments as projection on galactic.Departments;
  entity Positions as projection on galactic.Positions;
}
