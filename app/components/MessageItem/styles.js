import { StyleSheet } from 'react-native'
import { colors } from '../../config/styles'

export default StyleSheet.create({
  messageItemContainer: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    borderRadius: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0, height: 1
    },
    shadowOpacity: .3,
    shadowRadius: 3
  },
  messageItemContent: {
    backgroundColor: colors.orange,
    height: 252,
    borderRadius: 8,
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 4
  },
  messageItemTitleContainer: {
    paddingTop: 8,
    paddingLeft: 8,
    height: 32
  },
  messageItemTitle: {
    color: colors.white,
    lineHeight: 20
  },
  messageItemPreviewContainer: {
    backgroundColor: colors.white,
    height: 220,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  messageItemPreview: {

  },
  messageItemInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  messageItemSenderContainer: {
    marginTop: 4,
    backgroundColor: colors.orange,
    height: 32,
    borderRadius: 100,
    paddingLeft: 8,
    paddingRight: 8
  },
  messageItemSender: {
    marginTop: 8,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  messageItemRepliesContainer: {
    marginTop: 4,
    backgroundColor: colors.orange,
    height: 32,
    borderRadius: 100,
    paddingLeft: 8,
    paddingRight: 8,
    minWidth: 60
  },
  messageItemReplies: {
    marginTop: 8,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
