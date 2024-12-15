import Mock from 'mockjs';

let loginInfo = {};

Mock.setup({
  timeout: '200-1000',
});

Mock.mock('/api/login', 'post', (data) => {
  loginInfo = JSON.parse(data.body);

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
    'settings',
    'profile',
  ],
  admin: [
    'dashboard',
    'system-user',
    'system-role',
    'mutiple-level22',
    'mutiple-level21-level31',
    'settings',
    'profile',
  ],
};

const avatar = {
  user: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg?resize=1&w=480&h=270&quality=medium',
  admin:
    'https://store-images.s-microsoft.com/image/apps.51166.13718773309227929.a9ed3a56-4096-4b23-aca9-a9d49ff8b774.adc5fd92-9951-410f-84cb-9d9aacfe86cc',
};

Mock.mock('/api/user', 'get', () => {
  return {
    code: 200,
    message: '成功',
    data: {
      name: 'qzlthxp',
      email: '985234173@qq.com',
      avatar: avatar[loginInfo.username || 'user'],
      role: loginInfo.username || 'user',
      permissions: rolePermission[loginInfo.username || 'user'],
    },
  };
});
