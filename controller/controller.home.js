
const BrandListUrlRequest = 'http://localhost/gestion/brands/';

fetch (BrandListUrlRequest)

    . then ((response) => response.json())
    . then ((data) => {
        
        /* * Add brands on screen * */

        // Div that containing brands data
        const HtmlBransListContainer = document.getElementById("topbrandlist");
        HtmlBransListContainer.innerHTML = '';

        //
        data.forEach((brand) => {
            
            // Stars to print
            let _ratingScore  = brand.rating + '.0'; // print .0 on decimal free ratings
            let _starsElement = '';
            let _starsCount   = parseFloat(brand.rating);
            for (let _i = 0; _i < Math.floor(_starsCount); _i += 1) {
                _starsElement += '<p><img src="assets/images/filledStar.svg" alt=""></p>';
            }

            // Add half star
            if (_starsCount > Math.floor(_starsCount)) {
                _starsElement += '<p><img src="assets/images/HalfFilledStar.svg" alt=""></p>';
                _ratingScore = brand.rating; // With non zero décimal remove the .0
            }

            const HtmlBrandElement = `

            <div class="col-lg-4 col-sm-6 mb-4">
                <a href="#" class="px-4 py-4 bg-white text-center d-block match-height">
                    <img width="100%" src="${brand.brand_image}" alt="">
                    <h3 class="mb-3 mt-0">${brand.brand_name}</h3>

                </a>

                <div class="px-4 bg-white text-center d-block">
                    <p class="mb-0 display-5">${_ratingScore}</p>
                    <div>
                        <div class="d-flex justify-content-center">
                            ${_starsElement}
                        </div>
                    </div>
                </div>

                <div class="text-center p-2 bg-light">
                    <a href="">Plus d'informations</a>
                </div>
            </div>
            
            `;

            HtmlBransListContainer.innerHTML += HtmlBrandElement;

        });
        
    })

    . catch ((error) => console.error("Error while fecthing brand data", error));