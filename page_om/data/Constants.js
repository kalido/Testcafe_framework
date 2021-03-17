import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    STANDARD_USER:{ 
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD
    },
    LOCKED_OUT_USER:{ 
        USERNAME: process.env.LOCKED_USERNAME,
        PASSWORD: process.env.LOCKED_PASSWORD
    },
    PROBLEM_USER:{ 
        USERNAME: process.env.PBM_USERNAME,
        PASSWORD: process.env.PBM_PASSWORD
    },
    PERFORMANCE_GLITCH_USER:{ 
        USERNAME: process.env.PERFOR_USERNAME,
        PASSWORD: process.env.PERFOR_PASSWORD
    },
    INVALID_USER:{ 
        USERNAME: process.env.INVALID_USERNAME,
        PASSWORD: process.env.INVALID_PASSWORD
    },
}