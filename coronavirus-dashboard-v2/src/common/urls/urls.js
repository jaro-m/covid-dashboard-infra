const
    env = process?.env ?? {},
    {
        REACT_APP_MAIN_CDN           = "%MAIN_CDN%",
        REACT_APP_DOWNLOADS_CDN      = "%DOWNLOADS_CDN%",
        REACT_APP_BASE_URL           = "%BASE_URL%",
        REACT_APP_API_ENDPOINT       = "%API_ENDPOINT%",
        REACT_APP_USER_API_ENDPOINT  = "%USER_API_ENDPOINT%",
        REACT_APP_HTTP_PROTOCOL      = "%"
    } = env;