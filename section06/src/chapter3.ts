/**
 * 인터페이스와 클래스
 * 인터페이스로 구현하는 필드들은 무조건 public 이다.
 * -> 만약 private 필드가 필요하다면 인터페이스에서 정의하는것이 아닌 따로 생성자 매개변수에 정의해야 한다.
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
} // 클래스의 설계도 역할을 한다 이해하면 된다.

class Character implements CharacterInterface {
  // Character 클래스는 CharacterInterface 를 구현한다.

  // 필드 -> 생성자 매개변수 앞에 접근제어자를 붙이면 자동으로 필드가 생성되므로 필드 삭제
  //name: string;
  //moveSpeed: number;

  // 생성자
  constructor(public name: string, public moveSpeed: number) {
    // -> 생성자 매개변수 앞에 접근제어자를 설정하여 자동으로 필드 값 초가화
    //this.name = name;
    //this.moveSpeed = moveSpeed;
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동! `);
  }
}
