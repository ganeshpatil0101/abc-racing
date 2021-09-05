import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
    app: 'ABC-Racing',
    version: '1',
    plugins:[
        googleAnalytics({
            trackingId: 'G-FTW1M0TN2N'
        })
    ]
});

analytics.page();

window.Analytics = analytics

/* export analytics for usage through the app */
export default analytics;

