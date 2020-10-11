const schemaIdFunction = require("./schemaIdFunction");

module.exports = mongoose => {
  const schema = mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    referral_code: {
      type: String,
      default: function() {
        let hash = 0;
        for (let i = 0; i < this.email.length; i++) {
          hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
        }
        let res = (hash & 0x00ffffff).toString(16).toUpperCase();
        return "00000".substring(0, 6 - res.length) + res;
      },
      required: false
    },
    referred_by: {
      type: String,
      default: null
    },
    third_party_auth: [mongoose.Schema({
      provider_name: {
        type: String,
        default: null
      },
      provider_id: {
        type: String,
        default: null
      },
      provider_data: {
        type: {},
        default: null
      }
    })],
    wishlist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wishlist'
    }
    // date: {
    //   type: Date,
    //   default: Date.now
    // }
  }, { timestamps: true, strict: false })

  schemaIdFunction(schema);

  const User = mongoose.model("User", schema);
  return User;
}