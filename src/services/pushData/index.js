let pushData = (requestFn) => {

    return function(params){
            let url = new URL ('https://daugherty-dashboard-backend.herokuapp.com/api/v1/admin/updateConfig')
            url.searchParams.append('tvIdentifier', params.tvIdentifier)
            url.searchParams.append('videoPlaylist', params.videoPlaylist)
            url.searchParams.append('banner', params.banner)
            url.searchParams.append('sidebar', params.sidebar)
            return requestFn(url, {method: 'PUT'})
    }
}

export { pushData }
