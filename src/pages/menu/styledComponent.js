import styled from 'styled-components'

import border from 'components/styled/border'

const MenuWrapper = styled.div `
  height: 100%;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  > div:nth-child(3) {
    position: relative;
    flex: 1;
  }
`

const MenuHeader = styled.header `
  height: .44rem;
  background: #ee7530;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuNav = border({
  component: styled.nav `
    width: 1.44rem;
    height: .3rem;
    display: flex;
    position: relative;
  `,
  color: '#fff',
  radius: 15
})

const MenuNavItem = styled.div `
  height: 100%;
  width: 50%;
  text-align: center;
  line-height: .3rem;
  position: absolute;
  color: ${ props => props.active ? '#ee7530' : '#fff' };
  z-index: 1;
  left: ${ props => props.pos !== 'right' ? 0 : '' };
  right: ${ props => props.pos === 'right' ? 0 : '' };
`

const MenuNavSlider = styled.div `
  position: absolute;
  border-radius: .15rem;
  background: #fff;
  left: ${ props => props.dir === 'left' ? 0 : '50%'};
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 0;
  transition: all .3s ease-in;
`

const MenuList = border({
  component: styled.div `
    flex: 1;
    display: flex;
    width: 100%;
    position: absolute !important;
  `,
  color: '#ddd',
  width: '1px 0 0 0'
})

const MenuListNav = styled.ul `
  width: .93rem;
  background: #f3f3f3;
`

const MenuListNavItem = styled.li `
  height: .48rem;
  text-align: center;
  background: ${ props => props.active ? '#fff' : '#f3f3f3' };
  span {
    display: inline-block;
    height: 100%;
    line-height: .48rem;
    border-bottom: solid .02rem ${ props => props.active ? '#ee7530' : '#f3f3f3' };;
  }
`

const MenuListContent = styled.div `
  flex: 1;
  padding: .2rem;
`


export {
  MenuWrapper,
  MenuHeader,
  MenuNav,
  MenuNavItem,
  MenuNavSlider,
  MenuList,

  MenuListNav,
  MenuListNavItem,
  MenuListContent
}