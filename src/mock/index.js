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
      name: '林俊杰',
      email: '985234173@qq.com',
      avatar:
        'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b9/64/5a/b9645a4b-b66b-a62c-5998-5c99c5bd6e9b/mzl.obbxkbai.jpg/2400x933vf-60.jpg',
      role: 'admin',
      permissions: [
        'dashboard',
        'mutiple-level21-level31',
        'mutiple-level22',
        'system-user',
        'system-role',
      ],
    },
  };
});
