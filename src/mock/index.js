import Mock from 'mockjs';

const key = 'LOGIN_INFO';

Mock.setup({
  timeout: '200-1000',
});

Mock.mock('/api/login', 'post', (data) => {
  localStorage.setItem(key, data.body);

  // 模拟登录成功
  return {
    code: 200,
    message: '登录成功',
    data: {
      token: Mock.Random.guid(),
    },
  };
});

const rolePermission = {
  user: [
    'dashboard',
    'mutiple-level22',
    'mutiple-level21-level31',
    'article-column-v3-together',
    'open-source-uni-app-tree-select',
    'settings',
    'profile',
  ],
  admin: [
    'dashboard',
    'mutiple-level22',
    'mutiple-level21-level31',
    'article-column-v3-together',
    'open-source-uni-app-tree-select',
    'settings',
    'profile',
    'system-user',
    'system-role',
  ],
};

const avatar = {
  user: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg?resize=1&w=480&h=270&quality=medium',
  admin:
    'https://store-images.s-microsoft.com/image/apps.51166.13718773309227929.a9ed3a56-4096-4b23-aca9-a9d49ff8b774.adc5fd92-9951-410f-84cb-9d9aacfe86cc',
};

Mock.mock('/api/user', 'get', () => {
  const loginInfo = localStorage.getItem(key);
  if (!loginInfo) {
    return {
      code: 200,
      message: '成功',
      data: {
        code: 401,
      },
    };
  }

  const { username = 'user' } = JSON.parse(loginInfo);

  return {
    code: 200,
    message: '成功',
    data: {
      name: 'qzlthxp',
      email: '985234173@qq.com',
      avatar: avatar[username],
      role: username,
      permissions: rolePermission[username],
    },
  };
});
