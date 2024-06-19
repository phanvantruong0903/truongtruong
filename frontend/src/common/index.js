const backendDomain = "http://localhost:8080"

const SummaryApi = {
    creatRequest : {
        url : `${backendDomain}/api/sendRequest`,
        method: "post"
    },
    getRequest : {
        url : `${backendDomain}/api/getRequest`,
        method : "get"
    }
}

export default SummaryApi;