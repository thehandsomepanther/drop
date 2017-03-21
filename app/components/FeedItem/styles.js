import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export default StyleSheet.create({
  feedItemContainer: {
    borderRadius: 8,
    height: 200,
    borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  feedItemTitleContainer: {
    height: 36,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.red,
    paddingLeft: 12
  },
  feedItemTitle: {
    lineHeight: 36,
    width: 300,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  feedItemPreviewContainer: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    height: 200-36-12-1,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  feedItemPreview: {
  }
})
