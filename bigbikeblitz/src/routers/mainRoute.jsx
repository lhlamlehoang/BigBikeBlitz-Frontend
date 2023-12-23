import Home from '../components/Home/home'

export default function init(routes) {
    const route = {
      path: "/",
      element: <Home />,
  
      // Element là AuthenLayout, các children muốn hiển thị được trong AuthenLayout thì trong Layout phải có outlet mới hiển thị được
      // outlet đóng vai trò tương tự children
      // Xem thêm ở https://reactrouter.com/en/main/components/outlet
  
      children: [
      ],
    };
    routes.push(route);
}
    