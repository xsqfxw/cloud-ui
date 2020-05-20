import { copy } from '../../utils/edit/clipboard';
// import i18n from '@/utils/i18n';
export const UCopy = {
    name: 'u-copy',
    props: {
        value: String,
        text: { type: String, default: '复制' },
        placement: { type: String, default: 'top' },
        successText: { type: String, default: '已复制' },
        disabled: { type: Boolean, default: false },
        hideDelay: { type: Number, default: 3000 },
        feedback: { type: String, default: 'tooltip' }, // @deprecated
        modalType: { type: String, default: 'tooltip' }, // @deprecated
    },
    data() {
        return {
            success: false,
            timeoutId: undefined,
        };
    },
    destroyed() {
        clearTimeout(this.timeoutId);
    },
    methods: {
        copy() {
            if (this.disabled)
                return;
            this.success = copy(this.value);
            if (this.success) {
                if (this.feedback === 'toast' || this.modalType === 'toast')
                    this.$toast.show(this.successText, this.hideDelay);
                this.$emit('copy', {
                    value: this.value,
                }, this);
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    this.success = false;
                }, this.hideDelay);
            }
        },
    },
};

export default UCopy;
