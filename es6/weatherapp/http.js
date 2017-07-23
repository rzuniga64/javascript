/**
 *  Class is used to make a AJAX HTTP request to the https://openweathermap.org weather API.
 */
export class Http {

    /**
     *  Make a AJAX HTTP request to the https://openweathermap.org weather API.
     *  Method is static since we don't want to instantiate this class.
     *  @param url with city name.
     *  @returns {Promise<T>|Promise}
     */
    static fetchData(url) {

        return new Promise((resolve, reject) => {

            const HTTP = new XMLHttpRequest();

            HTTP.open('GET', url);
            HTTP.onreadystatechange = function() {
                if (HTTP.readyState === XMLHttpRequest.DONE && HTTP.status === 200) {
                    // Convert data we get back into JavaScript object.
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState === XMLHttpRequest.DONE) {
                    reject('Something went wrong');
                }
            };
            HTTP.send();    // Actually send the request.
        });
    }
}