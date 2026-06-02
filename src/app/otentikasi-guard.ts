import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log('Otentikasi dimulai');
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const secretKey = "akulashark098";

  // GET ENCRYPTED COOKIE
  const encryptedUser =
    cookieService.get("userData");
  console.log("Encrypted cookie:");
  console.log(encryptedUser);

  // CHECK EMPTY COOKIE
  if (
    encryptedUser == null ||
    encryptedUser == undefined ||
    encryptedUser == ""
  ) {
    console.log("Cookie kosong");
    router.navigate(["/login"]);
    return false;
  }

  // DECRYPT COOKIE
  const bytes = CryptoJS.AES.decrypt(
    encryptedUser,
    secretKey
  );

  const userId =
    bytes.toString(CryptoJS.enc.Utf8);
  console.log("Decrypted userId:");
  console.log(userId);

  // VALIDATE RESULT
  if (
    userId == null ||
    userId == undefined ||
    userId == ""
  ) {

    console.log("Decrypt gagal");
    router.navigate(["/login"]);
    return false;
  }

  console.log("Login valid");
  return true;

};
