export function fetchCats(){

    return (dispatch) => {

        dispatch({type: "LOADING_CATS"})

        return fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(res => res.json())
            .then(data => dispatch({type: "FETCH_CATS", payload: data.images}))

    }
}
