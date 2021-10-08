import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 0px'
    },
    shareText: {
        fontSize: '16px',
        color: 'gray',
    },
})


function ThidSection() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box>
                    <Box className={classes.socialShare}>
                        <span className={classes.shareText}>স্বত্ব © ২০২১ | প্রথম আলো
সম্পাদক ও প্রকাশক: মতিউর রহমান</span>
                    </Box>
                </Box>

                {/* Right side */}
                <Box>
                    <Box className={classes.rightAppWrapper}>
                        <span className={classes.shareText}>ওয়েবসাইট ডিজাইন এবং ডেভেলপ করেছেন: মোঃ বোরহান উদ্দিন </span>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ThidSection
