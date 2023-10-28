export const mixins = {
  data () {
    return {
      localApi: this.$api,
      maximized: false,
      dialogSize: 'dialog_card column',
      showQuery: true,
      tableLabel: '展开',
      loading: false,
      importing: false,
      exporting: false,
      confirmMsg: '',
      selected: [],
      list: [],
      form: {},
      emptyForm: {},
      searchForm: {},
      key: '',
      catalog: '',
      pagination: {
        page: 1,
        size: 10,
        rowsPerPage: 10,
        rowsNumber: 99
      },
      editType: '',
      uploadUrl: '/file/upload',
      group: []
    }
  },
  computed: {},
  created () {},
  mounted () {
    this.searchForm = {}
    if (this.$q.platform.is.mobile) {
      this.dialogSize = 'dialog_tool column'
      this.maximized = true
    } else {
      this.dialogSize = 'dialog_card column'
      this.maximized = false
    }
    // this.query()
  },
  methods: {
    queryParam () {
      return {}
    },
    beforeQuery () {
      return true
    },
    query (props) {
      if (!this.beforeQuery()) {
        return false
      }
      if (props && props.pagination) {
        console.log('props.pagination===>', props.pagination)
        this.pagination = props.pagination
      }
      this.loading = true
      return this.$api.get(this.url.list, {
        params: {
          ...this.queryParam(),
          ...this.searchForm,
          keyword: this.key,
          catalog: this.catalog,
          page: this.pagination.page,
          size: this.pagination.rowsPerPage
        }
      }).then((r) => {
        if (!r.data) return
        this.list = r.data.records.map((v, i) => {
          if (r.data.current > 1) {
            v.index = (r.data.current - 1) * r.data.size + (i + 1)
          } else {
            v.index = i + 1
          }
          return v
        })
        this.pagination.rowsNumber = r.data.total
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    },
    reset () {
      this.form = { ...this.emptyForm }
    },
    copy (p) {
      this.$q.dialog({
        title: '复制',
        message: '请输新的名称',
        prompt: {
          model: '',
          outlined: true,
          isValid: (val) => val.length > 2,
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk((data) => {
        this.$api.post(`${this.url.copy}?id=${p.id}&name=${data}`, {}).then((r) => {
          this.$info(r.message)
          this.query()
        })
      })
    }
  }
}
