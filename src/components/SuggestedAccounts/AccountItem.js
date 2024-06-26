import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[300, 100]} offset={[-150, -30]} placement="bottom-start" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/442505173_1987519968317490_8947428851547572351_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZmrHNdMiqZcMt0SibqskPzIGptUJx7pTMgam1QnHulPU4bpplWwNcWG9e8wZ48RmfDfPFaa2-g3tmnNKLryps&_nc_ohc=tFe22mxkVYEQ7kNvgGvFxtu&_nc_ht=scontent.fsgn5-13.fna&oh=00_AYAHEJm4pW8Mrn-LahfdWf2O5Vih4Ism8vxQAUKnyL5Tlw&oe=664E7B98"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Lê Quang Hào</strong>
                        </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
