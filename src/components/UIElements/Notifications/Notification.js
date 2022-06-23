import { notification } from 'antd';
import {  ShoppingCartOutlined , LikeFilled, HeartFilled, EditFilled} from '@ant-design/icons';
import "./Notification.css";



export const openNotification = (message, description, notificationType, notficationIcon) => {
  const notificationMapping = {
    type: {
      success: "#2e7d32",
      fail: "#d32f2f",
    },
    icon: {
      cart: <ShoppingCartOutlined/>,
      favorite: <HeartFilled style={{ color: '#FF0000' }}/>,
      review: <LikeFilled style={{ color: '#ADD8E6' }}/>,
      order: <EditFilled />
    }
  }
  console.log(notificationMapping.type[notificationType]);



  notification.open({
    message: message,
    description: description,
    icon: notificationMapping.icon[notficationIcon],
    className: "alb",
    style: {
      backgroundColor: notificationMapping.type[notificationType],
      color: "#fff" 
    },
  });
};

