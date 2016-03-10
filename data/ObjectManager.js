/* @flow weak */

import ObjectManagerBase from './lib/ObjectManagerBase';

import Compendium from '../units/imrsk-example-compendium/graphql/model/Compendium';
import Ensayo from '../units/imrsk-example-ensayo/graphql/model/Ensayo';
import ToDo from '../units/imrsk-example-todo/graphql/model/ToDo';
import Translaticiarum from '../units/imrsk-example-translaticiarum/graphql/model/Translaticiarum';
import User from './model/User';

export default class ObjectManager extends ObjectManagerBase
{
  constructor( Viewer_User_id )
  {
    super( Viewer_User_id );

    this.registerEntity( 'Compendium', Compendium );
    this.registerEntity( 'Ensayo', Ensayo );
    this.registerEntity( 'ToDo', ToDo );
    this.registerEntity( 'Translaticiarum', Translaticiarum );
    this.registerEntity( 'User', User );
  }
}
