import Mock from 'mockjs';

Mock.setup({
  timeout: '600-1000',
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
