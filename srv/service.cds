using galactic from '../db/schema';


service GalacticService {
/*
  @restrict: [
    { grant: '*', to: 'authenticated-user' },
    { grant: '*', to: 'Admin' }
  ]
  */
  entity Spacefarers as projection on galactic.Spacefarers;

  entity Departments as projection on galactic.Departments;

  entity Positions as projection on galactic.Positions;
}
