package com.cbt.cbt_service_manager.service.impl;

import com.cbt.cbt_service_manager.model.User;
import com.cbt.cbt_service_manager.repository.UserRepository;
import com.cbt.cbt_service_manager.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        // Aquí podrías encriptar password si luego metes seguridad
        return userRepository.save(user);
    }

    @Override
    public List<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> updateUser(Long id, User request) {
        return userRepository.findById(id).map(existing -> {
            existing.setFullName(request.getFullName());
            existing.setEmail(request.getEmail());
            existing.setEnabled(request.isEnabled());
            existing.setRoles(request.getRoles());

            return userRepository.save(existing);
        });
    }

    @Override
    public boolean deleteUser(Long id) {
        return userRepository.findById(id).map(user -> {
            userRepository.delete(user);
            return true;
        }).orElse(false);
    }

    @Override
    public User update(Long id, User user) {
        User existing = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existing.setFullName(user.getFullName());
        existing.setEmail(user.getEmail());
        existing.setEnabled(user.isEnabled());

        // Si vienen roles:
        if (user.getRoles() != null) {
            existing.setRoles(user.getRoles());
        }

        return userRepository.save(existing);
    }

}
