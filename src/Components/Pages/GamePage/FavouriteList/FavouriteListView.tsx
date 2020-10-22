import React from 'react'
import './FavouriteListStyle.css'
// import JokeItem from '../JokeItem'
// import { JokesListType } from '../../Types'

type Props = {
  openFavList: boolean
  // favList: JokesListType
  // handleFavorites: (id: string) => void
}

const FavouriteListView: React.FC<Props> = ({ openFavList }) => {
  return (
    <aside className={ `Favorite ${openFavList ? '' : 'Favorite--open'}` }>
      <h2 className="Favorite_title">Favourite</h2>
      <ul className="Favorite_list">
        { /* { favList.filter(item => item.isFavourite).map((item) => { */ }
        { /*  return <JokeItem handleItem={ () => handleFavorites(item.id) } */ }
        { /*    key={ item.id } */ }
        { /*    className="Favorite_item" */ }
        { /*    { ...item } /> */ }
        { /* }) } */ }
      </ul>
    </aside>
  )
}

export default FavouriteListView
