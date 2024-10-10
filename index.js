
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //
/////lol good job first try!
const setDigitalCode = function(array, value){
    for (var i = array.length -1; i >= 0; i-=2) {
        array[i].digitalCode = value;
    }
   return array
};

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
    // girl you made this too complicated!
    return array.filter((movie) => {
      
        return movie.genreTags.includes(tag)
    })
 
};



// PROBLEM #3 //
/////you wer eon the right track
const filterBySpecialFeatureType = function(array, type){
    // below is darren's way and it's correct too
    // return array.filter(movie => movie.specialFeatures.some(feature => feature.type === type))
   return array.filter(function(movie) {
        for (var i = 0; i < movie.specialFeatures.length; i++ ){
            if (movie.specialFeatures[i].type === type) {
                return true
            }
        }
       
    return false
    })

};


// PROBLEM #4 //
// nailed it from the go
const getTopSpecialFeature = function(array, title){
    if (array.length === 0) {
        return 'no matching title found'
    }
    if (array[0].title === title) {
        return `${array[0].title} Special Feature: ${array[0].specialFeatures[0].title}`
    } else {
        return getTopSpecialFeature(array.slice(1), title)
    }
};


// PROBLEM #5 //
/////nailed it once you had the little walk through
const mapTitles = function(array){
    return array.map(movie => {
        return `${movie.title} (${movie.year}) - dir. ${movie.director}`
    })
    
};



// PROBLEM #6 //
/// you were on the right track /// all below solutions are true
const mapSpecialFeatures = function(array){
  
    return array.map((movie) => {
        return movie.specialFeatures.map(feature => feature.title)
        // let output = [];
        
    // movie.specialFeatures.forEach(feature => {
    //     output.push(feature.title)
    // })
    // return output
        // for (let i = 0; i < movie.specialFeatures.length; i++) {
        //     output.push(movie.specialFeatures[i].title)
        // }
        // return output
     })
};

// PROBLEM #7 //
///// not even close
    // you got way too confused trying to concat and bullshit
const createNonsenseString = function(array, index){ //lets use index 1
   return array.reduce((accumulator, movie) => {
    // accumulator = '' | movie = {Rear Window}
        if (movie.title && index < movie.title.length) {
            return accumulator + movie.title[index] // 'e'
        } 
        return accumulator
}, '')
   
};

// PROBLEM #8 //

const getValues = function(object, props){
    /// peytons way and it worked
    // let values = [];
    // for (let key of props) { // for of loop
    //     values.push(object[key])
    // }
    // return values

    // another example
    let output = [];
    props.forEach(key => {
        output.push(object[key])
    })

    //your way--so bad -- he said filter wouldn't work anyways--map could though
    // return Object.entries(object).filter((element) => {
    //     element.unshift()
    //     // arr.push(element.unshift())
    // })
    // // return arr
};
