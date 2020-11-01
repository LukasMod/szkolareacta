import React from 'react';

import '03/04/Card/Card.css';

import { CardHeader, CardFooter, CardMain } from '03/04/Card/components/index';
import { useState } from 'react';

const Card = ({ image }) => {
  const [readMore, setReadMore] = useState(false);

  const handleClickReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className='card'>
      <div className='card-top'>
        <CardHeader
          category='R'
          title='Shrimp and Chorizo Paella'
          date='September 14, 2016'
        />
        <CardMain
          image={image}
          isOpen={readMore}
          text='This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.'
          handleClick={handleClickReadMore}
        />
      </div>
      {readMore && (
        <CardFooter
          text1='Method:'
          text2='Heat 1/2 cup of the broth in a pot until simmering, add saffron and
        set aside for 10 minutes.'
          text3='Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
        over medium-high heat. Add chicken, shrimp and chorizo, and cook,
        stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
        shrimp to a large plate and set aside, leaving chicken and chorizo in
        the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about
        10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
        bring to a boil.'
          text4='Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is
        absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
        shrimp and mussels, tucking them down into the rice, and cook again
        without stirring, until mussels have opened and rice is just tender, 5
        to 7 minutes more. (Discard any mussels that don’t open.)'
          text5='Set aside off of the heat to let rest for 10 minutes, and then serve.'
        />
      )}
    </div>
  );
};

export default Card;
