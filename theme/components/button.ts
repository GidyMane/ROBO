import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props;

      const hoverColor = mode('#C84F08', '#C84F08')(props); // Set hover color to #C84F08 in both light and dark modes
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? hoverColor
          : mode('#C84F08', '#C84F08')(props), // Set inactive color to #C84F08 in both modes
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      };
    },
  },
};
