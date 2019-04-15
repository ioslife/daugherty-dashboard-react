let pullData = (requestFn) => {

    return function(params){
            let url = new URL ('https://daugherty-dashboard-backend.herokuapp.com/api/v1/admin/getConfig')
            url.searchParams.append('tvIdentifier', params.tvIdentifier)
            return requestFn(url, {method: 'GET'})
    }
}

export { pullData }
