const apiKey = "8mICshm4do4I18WocxtgjtnV1NjkS_8UiLVbBMXnLdHK5HOYDBf-OMQVmdHdSkm-84GaPhsrfGPV2abUF8TaIYCkP8i8URWVa7np2SDDJmXw8_5j8PQEk2o6NzqkW3Yx"

var Yelp = {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []

        }
        this.searchYelp.bind(this)
    },
     search: function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}
        `, headers = {
            headers: {
               Authorization: `Bearer ${apiKey}`
            }
        }).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if (jsonResponse.business) {
                return jsonResponse.businesses.map(business=>{
                  return  {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location[address1],
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zipCode,
                       category: business.categories.title,
                       rating: business.rating,
                       reviewCount: business.review_count
                   }

                });
            }
        }).then(businesses =>{
            this.setState({
                businesses: businesses
            })
        })
    }
}

export default Yelp;