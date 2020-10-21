import React from 'react';

const style = {
    textAlign: 'center',
    wrapper: {
        backgroundColor: '#ecf0f1'
    },
    h2: {
        color: '#f39c12'
    },
    p: {
        color: '#2c3e50'
    }

  };

const BlogTitle = ({intro, title}) => {

    const longIntro = (text) => {
        if(text.length > 30){
            const shortText = [[...text].slice(0,25),'...'];
            return shortText;
        } return text;
    };

    return (
        <div style={style.wrapper}>
            <h2 style={style.h2}>{title}</h2>
            <p style={style.p}>{longIntro(intro)}</p>
        </div>);
};

export default BlogTitle;