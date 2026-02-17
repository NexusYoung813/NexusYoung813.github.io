//js的页面是基于react的，编写一个react组件即可成为页面

import Layout from '@theme/Layout';
import React from 'react';

const Hello = () => {
    return (
        <Layout>
            <div>
                <h1>
                    这是hello页面
                </h1>
            </div>
        </Layout>
    );
}

export default Hello;
