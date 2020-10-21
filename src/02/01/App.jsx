import React, {Fragment} from 'react';

import './App.css';
import BlogTitle from './BlogTitle';

// Jeżeli intro jest dłuższe niż 25 znaków, wówczas wyświetl pierwsze 25 znaków, a następnie 3 kropki: .... Przykład: Po przegranym zakładzie z...

// Następnie stwórz nowy komponent np. BlogTile, który wykorzystasz do wyświetlenia każdego pojedynczego wpisu w iteracji.

// W aplikacji wykorzystaj stylowanie, ale spróbuj to zrobić za pomocą JavaScript 


const App = () => {

    const posts = [
        { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
        { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
        { id: 3, title: 'Adam Małysz Zgolił wąs',
          intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
        }
      ];

    const postOnBlog = posts.map(post =>
        <BlogTitle key={post.id} intro={post.intro} title={post.title}/>);

    return (
        <Fragment>
            <h2>02/01</h2>
            {postOnBlog}
        </Fragment>);
};

export default App;