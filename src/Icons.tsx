import Icon from 'react-native-vector-icons/Feather';

const TabIcons = ({name, color, size}) => {
  let iconName;

  switch (name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Categories':
      iconName = 'list';
      break;
    case 'Post':
      iconName = 'edit';
      break;
    case 'Notifications':
      iconName = 'bell';
      break;
    case 'Settings':
      iconName = 'settings';
      break;
    default:
      iconName = 'circle';
      break;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabIcons;
