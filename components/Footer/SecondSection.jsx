import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GooglePlay from './Image/play.png'
import AppleStore from './Image/apple.jpg'

const useStyles = makeStyles({
    root: {
        borderBottom: '1px solid lightgray',
        padding: '20px 0px 0px 0px',
        marginBottom: '10px',
    },
    SecondColumn: {
        '& ul': {
            '& li': {
                display: 'inline-block',
                width: '30%',
                color: '#1B1E1A',
                margin: '10px 0',
                fontSize: '18px',
            },
        },
    },
    socialIcon: {
        marginRight: '10px',
        background: 'rgb(238, 238, 238)',
        borderRadius: '50%',
        padding: '6px',
        fontSize: '19px',
    },
    shareText: {
        fontSize: '19px',
    },
    socialShare: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightAppWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    appsIconImg: {
        width: '140px',
        height: '40px',
    },
})


function SecondSection() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={4} className={classes.root}>
                <Grid item xs={6}>
                    <Box className={classes.socialShare}>
                        <span className={classes.shareText}>শেয়ার করুন: &nbsp;</span>
                        <FacebookIcon className={classes.socialIcon} />
                        <TwitterIcon className={classes.socialIcon} />
                        <InstagramIcon className={classes.socialIcon} />
                        <YouTubeIcon className={classes.socialIcon} />
                    </Box>
                </Grid>

                {/* Right side */}
                <Grid item xs={6}>
                    <Box className={classes.rightAppWrapper}>
                        <span className={classes.shareText}>মোবাইল অ্যাপস ডাউনলোড করুন: &nbsp;</span>
                        <img className={classes.appsIconImg} src={GooglePlay} alt="Play store" />
                        <img className={classes.appsIconImg} src={AppleStore} alt="Apple store" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SecondSection
