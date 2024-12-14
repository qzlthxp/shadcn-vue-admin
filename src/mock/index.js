import Mock from 'mockjs';

Mock.setup({
  timeout: '200-1000',
});

Mock.mock('/api/login', 'post', () => {
  // 模拟登录成功
  return {
    code: 200,
    message: '登录成功',
    data: {
      token: Mock.Random.guid(),
    },
  };
});

Mock.mock('/api/user', 'get', () => {
  return {
    code: 200,
    message: '成功',
    data: {
      name: 'qzlthxp',
      email: '985234173@qq.com',
      avatar:
        'https://store-images.s-microsoft.com/image/apps.51166.13718773309227929.a9ed3a56-4096-4b23-aca9-a9d49ff8b774.adc5fd92-9951-410f-84cb-9d9aacfe86cc',
      role: 'admin',
      permissions: [
        'dashboard',
        'system-user',
        'system-role',
        'mutiple-level22',
        'mutiple-level21-level31',
        'settings',
        'profile',
      ],
    },
  };
});
